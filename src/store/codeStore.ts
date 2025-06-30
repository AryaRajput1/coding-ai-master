import { getCodeReviewAI } from '@/actions/codeReviewAction';
import { debounceFn } from '@/utility/debounce';
import { create } from 'zustand'

const ISSERVER = typeof window === "undefined";


export type CodeStoreTypes = {
    code: string
    isRunning: boolean
    result: string
    error: string
    review: string
    mode: 'code' | 'review'
    liveReview: boolean
    isReviewing: boolean
    reviewError: string
    setIsReviewing: (value: boolean) => void
    changeLiveReview: () => void
    setCode: (code: string) => void
    changeMode: () => void
    runCode: () => void
    getCode: () => string
}


const getReview = debounceFn(async (code: string, set: (args: Partial<CodeStoreTypes>) => void, get: () => CodeStoreTypes) => {
    if(!code) {
        return;
    }
    const { setIsReviewing } = get()
    try {
        setIsReviewing(true)
        const { success, data, error } = await getCodeReviewAI(code)

        if (success) {
            set({ review: data, reviewError: '' })
        } else {
            set({ review: '', reviewError: error })
        }
    }
    catch (e) {
        console.log(e)
    }
    setIsReviewing(false)
}, 1000)

export const useCodeStore = create<CodeStoreTypes>((set, get) => ({
    code: '',
    result: '',
    isRunning: false,
    error: '',
    review: '',
    mode: 'code',
    isReviewing: false,
    reviewError: '',
    setIsReviewing: (value) => {
        set({
            isReviewing: value
        })
    },
    liveReview: false,
    changeLiveReview: () => {
        set({
            liveReview: !get().liveReview
        })
    },
    changeMode: () => {
        if (get().mode === 'code') {
            set({
                mode: 'review'
            })
            return
        }

        set({
            mode: 'code'
        })
    },
    getCode: () => {
        if (!ISSERVER) { return JSON.parse(localStorage.getItem('code') || get().code); }

        return get().code;
    },
    setCode: (code: string) => {
        localStorage.setItem('code', JSON.stringify(code));
        set({
            code: code
        })

        if (get().liveReview) {
            console.log('LivePreview On')
            getReview(code, set, get)
        }
    },
    runCode: async () => {
        set({
            result: '',
            isRunning: true,
            error: '',
        })

        try {
            const code = get().getCode();
            const response = await fetch("https://emkc.org/api/v2/piston/execute", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    language: "javascript",
                    version: "*", // use latest
                    files: [{
                        name: "main.js",
                        content: code
                    }]
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.run.stderr) {
                set({
                    result: '',
                    isRunning: false,
                    error: result.run.stderr
                })
                return
            }

            getReview(code, set, get)

            set({ result: result.run.output, isRunning: false, error: '' })
        } catch (error) {
            console.log(error)
            set({
                result: '',
                isRunning: false,
                error: 'Something went wrong!'
            })
        }
    }
}))