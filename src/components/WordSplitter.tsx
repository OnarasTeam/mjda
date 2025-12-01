import React from 'react'

interface WordSplitterProps {
  text: string
  wordsPerLine?: number
}

const WordSplitter: React.FC<WordSplitterProps> = ({ text, wordsPerLine = 1 }) => {
  const words = text.split(' ')
  const chunks: string[] = []
  for (let i = 0; i < words.length; i += wordsPerLine) {
    chunks.push(words.slice(i, i + wordsPerLine).join(' '))
  }
  return (
    <>
      {chunks.map((chunk, index) => (
        <span key={index}>
          {chunk}
          {index < chunks.length - 1 && <br />}
        </span>
      ))}
    </>
  )
}

export default WordSplitter
