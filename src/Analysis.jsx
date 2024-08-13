import { useCallback, useState } from 'react'
import { Link } from 'wouter'
import { css } from '@emotion/react'

import { PuffLoader } from 'react-spinners'
import { ErrorModal } from './Modal.jsx'

import home from './assets/home.png'
import question from './assets/question.png'
import wand from './assets/wand.png'
import attachment from './assets/attachment.png'
import arrowUp from './assets/arrow-up.png'
import { accent, gray2, red, purple, blue, gray5, white } from './colors.js'

const HeaderStyle = {
  header: css`
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${gray2};
    
    padding: 0.8rem;
  `,
  home: css`
    position: absolute;
    left: 2rem;
  
    height: 1.7rem;
  `,
  title: css`
    color: ${accent};
    font-size: 1.7rem;
  `
}

function Header({ className }) {
  return (
    <header css={HeaderStyle.header} className={className}>
      <Link to='/' asChild>
        <img css={HeaderStyle.home} src={home}/>
      </Link>
      <h1 css={HeaderStyle.title}>분석 및 첨삭</h1>
    </header>
  )
}

const InfoStyle = {
  section: css`
    display: flex;
    align-items: center;
    gap: 1rem;
  
    padding: 0.7rem 1.7rem;
    
    border: 3px solid;
    border-radius: 25px;
    
    font-weight: 600;
  `,
  icon: css`
    width: 2rem;
  `
}

function Info({ icon, children, className }) {
  return (
    <section css={InfoStyle.section} className={className}>
      <img src={icon} css={InfoStyle.icon} />
      {children}
    </section>
  )
}

const FileUploadStyle = {
  form: css`
    border: 2px solid ${white}80;
    border-radius: 90px;
    
    padding: 0.5rem 0.6rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    :valid {
      border: 2px solid ${white};
    }
  `,
  upload: css`
    label {
      padding: 0.4rem 0.9rem;
    
      background-color: ${accent};
      
      border-radius: 45px;
      
      font-weight: bold;
      font-size: 1.2rem;
    }
  
    input {
      display: none;
    }
  `,
  submit: css`
    height: 2rem;
    width: 2rem;
  
    background-color: ${accent};
    
    border: 0;
    border-radius: 45px;
    
    opacity: 0.5;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    
    &[data-parent-is-valid="true"] {
      opacity: 1;
    }
  `
}

function FileUpload({ onSubmit, className }) {
  const [file, setFile] = useState(null)

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e);
      }}
      css={FileUploadStyle.form}
      className={className}
    >
      <div css={FileUploadStyle.upload}>
        <label htmlFor='file'>업로드</label>
        <input
          type='file'
          name='file'
          id='file'
          accept='.pdf'
          required
          onChange={({ target: { files } }) => files.length > 0 && setFile(files[0])}
        />
      </div>
      <button css={FileUploadStyle.submit} data-parent-is-valid={file !== null} disabled={file === null}>
        <img src={arrowUp} />
      </button>
    </form>
  )
}

const AnalysisStyle = {
  page: css`
    height: 100vh;
    height: 100dvh;
    
    display: flex;
    flex-direction: column;
  `,
  main: css`
    display: flex;
    flex-direction: column;
    
    flex-grow: 1;
  `,
  spinnerBox: css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-grow: 1;
  `,
  infoList: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
       
    padding: 0 3rem;
    
    list-style-type: none;
    
    flex-grow: 1;
  `,
  fileInput: css`
    height: 3rem;
        
    background-color: ${gray5};
    
    margin: 0 1.6rem 1.5rem 1.6rem;
  `,
  errorModal: css`
    background-color: ${gray2};
    
    margin: 0 3rem;
  `
}

export function Analysis() {
  const [isLoading, setLoadingStatus] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(false)
  const onSubmit = useCallback(async e => {
    setLoadingStatus(true)

    const response = await fetch('/api/upload-pdf/', {
      method: 'POST',
      body: new FormData(e.currentTarget),
      credentials: 'same-origin'
    })

    setLoadingStatus(false)

    if (response.ok) {
      setResult(await response.json())
    } else {
      setError(true)
    }
  }, [])

  if (isLoading) {
    return (
      <div css={AnalysisStyle.page}>
        <Header/>
        <main css={AnalysisStyle.main}>
          <div css={AnalysisStyle.spinnerBox}>
            <PuffLoader/>
          </div>
          <FileUpload
            key='loading'
            css={AnalysisStyle.fileInput}
            onSubmit={() => {}}
          />
        </main>
      </div>
    )
  }

  if (error) {
    return (
      <div css={AnalysisStyle.page}>
        <Header/>
        <main css={[AnalysisStyle.main, css`justify-content: end;`]}>
          <ErrorModal
            close={() => setError(false)}
            title='파일을 전송하지 못했어용...'
            message='다시 한 번 시도해주세용...'
            css={AnalysisStyle.errorModal}
          />
          <FileUpload
            key='error'
            css={AnalysisStyle.fileInput}
            onSubmit={() => {}}
          />
        </main>
      </div>
    )
  }

  if (result) {
    return (
      <div css={AnalysisStyle.page}>
        <Header/>
        <main css={[AnalysisStyle.main, css`justify-content: end;`]}>
          {JSON.stringify(result) /* @TODO Render with chat component */}
          <FileUpload
            key='loaded'
            css={AnalysisStyle.fileInput}
            onSubmit={() => {}}
          />
        </main>
      </div>
    )
  }

  return (
    <div css={AnalysisStyle.page}>
      <Header/>
      <main css={AnalysisStyle.main}>
        <ul css={AnalysisStyle.infoList}>
          <li>
            <Info icon={question} css={css`border-color: ${red}; color: ${red};` }>
              <p>진로와 교과목을 연관지어 어떤 활동을 해야 할 지 고민이라구용?</p>
            </Info>
          </li>
          <li>
            <Info icon={wand} css={css`border-color: ${purple}; color: ${purple};` }>
              <p>생활기록부를 분석해 유익한 교과 활동을 추천해드릴게용!</p>
            </Info>
          </li>
          <li>
            <Info icon={attachment} css={css`border-color: ${blue}; color: ${blue};` }>
              <p>생활기록부 파일(PDF)을 제출해주세용~</p>
            </Info>
          </li>
        </ul>
        <FileUpload
          css={AnalysisStyle.fileInput}
          onSubmit={onSubmit}
        />
      </main>
    </div>
  )
}