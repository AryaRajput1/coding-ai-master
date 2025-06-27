import { useCodeStore } from '@/store/codeStore'
import React from 'react'

const getFormatReview = (review: string) => {
    const parsedReview = review.split("•").filter(Boolean).map((reviewLine) => ({
        label: reviewLine.split("⁃")[0]?.replace('\n', '')?.replace("**", ""),
        value: reviewLine.split("⁃")[1]?.replace('\n', '')
    })).filter(reviewLine => reviewLine.value && reviewLine.label)

    if (!parsedReview || !parsedReview.length) {
        return null;
    }

    return <div className='flex flex-col gap-4'>{
        parsedReview.map(parsedReviewPoint => (<div className="" key={parsedReviewPoint.label}>
            <label className='text-sm font-semibold'>
                {parsedReviewPoint.label}
            </label>
            <div className='shadow-md bg-binge-900 rounded px-4 py-2 text-normal text-primary-900 text-md'>
                {parsedReviewPoint.value}
            </div>
        </div>))}
    </div>
}

const ReviewPanel = () => {
    const { isReviewing, review, reviewError } = useCodeStore()

    if (reviewError) {
        return <div>Oops! There is an error. Can you review manually please.</div>
    }

    if (isReviewing) {
        return <div>
            <span className='animate-pulse'>
                Running...
            </span>
        </div>
    }

    return <div>
        {getFormatReview(review) || 'No Review'}
    </div>
}

export default ReviewPanel
