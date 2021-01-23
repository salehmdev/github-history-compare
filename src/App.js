import { useState } from 'react';
import './App.css';

function App() {
  let [url, setUrl] = useState("");
  let [branchName, setBranchName] = useState("master");

  function handleBranchNameChange(event) {
    let changedBranchName = event.target.value;

    if(!changedBranchName || changedBranchName.length === 0)
      return setBranchName("master");

    setBranchName(event.target.value);
  }

  function handleUrlChange(event) {
    let changedUrl = event.target.value;

    if(!changedUrl || changedUrl.trim().length === 0)
      return setUrl("");

    setUrl(changedUrl);
  }

  function displayConvertedUrl() {
    if(!url || url.length === 0)
      return "";

    return url.replace("/commit/", "/compare/").concat(`..${branchName}`)
  }

  return (
    <div className="App">
      <h1>GitHub History Compare</h1>
      <p>
        A simple conversion on an older GitHub <u><i>commit</i></u> url to a <u><i>compare</i></u> url against your <strong>branch's latest</strong> commit or <strong>specific</strong> commit ID. <br/>
        <br />
        For more info, check out: <br />
        <a className="info" href="https://docs.github.com/en/github/committing-changes-to-your-project/comparing-commits">
          https://docs.github.com/en/github/committing-changes-to-your-project/comparing-commits
        </a>
      </p>

      <label>
        Compared Branch Name or Commit ID: 
        <input type="text" placeholder="Default: master" onChange={handleBranchNameChange} onKeyUp={handleBranchNameChange} />
      </label>

      <label className="commit-url-label">
        GitHub Commit url: 
        <input type="text" placeholder="e.g.: https://github.com/<COMPANY>/<PROJECT-NAME>/commit/<BASE-COMMIT-ID>" onChange={handleUrlChange} onKeyUp={handleUrlChange} />
      </label>
      <br />

      Converted URL: <br />
      <a className="result" href={displayConvertedUrl()}>{displayConvertedUrl()}</a>
    </div>
  );
}

export default App;
