import styled from 'styled-components/macro'
import {useRef} from 'react'

export default function FileUploader({setFiles, files}) {
    const inputRef = useRef()


    const handleSubmit = event => {
        event.preventDefault()
        const file = inputRef.current.files[0]
        const formData = new FormData()
        formData.set('image', file)

        setFiles([...files, formData])

        console.log(formData)
    }

    return (
        <Wrapper onSubmit={handleSubmit}>
            <>
                <input type="file" ref={inputRef}/>
                <button>Upload</button>
            </>
        </Wrapper>
    )
}

const Wrapper = styled.form`
  position: fixed;
  bottom: 24px;
  left: 24px;
  right: 24px;
  border: 1px solid #efefef;
  background: white;
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 1px 1px #444;
`