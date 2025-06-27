"use client";

import React from 'react'
import Editor from '@monaco-editor/react';
import { useCodeStore } from '@/store/codeStore';

const CodePanel = () => {
    const { setCode, getCode } = useCodeStore()
    const code = getCode()
    return (
        <Editor
            options={{
                fontSize: 14,
                minimap: { enabled: false },
                wordWrap: "on",
                scrollBeyondLastLine: false,
            }}
            theme='vs-dark'
            defaultLanguage="javascript"
            defaultValue={code}
            onChange={(val) => setCode(val!)}
        />
    )
}

export default CodePanel
