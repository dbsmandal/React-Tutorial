import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Signin(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const handleChange = (e) => {
        setUsername(e.target.value);
    }
    const handleSubmit = () => {
        if (username & password) {
            props.setUser(true);
            props.setIsSigned(true);
            Navigate('/');
            // localStorage.setItem("IsLogin", "true");
            // localStorage.setItem("user", username);
        } else {
            alert("login failed");
        }
    }
    return (
        <div class="container box">
            {/* action="/action_page.php" */}
            <form className="form-horizontal" >
                <div className="form-group">
                    <label className="control-label col-sm-4" for="username">Username:</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="username" placeholder="Username" value={username} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4" for="email">Email:</label>
                    <div className="col-sm-6">
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4" for="pwd">Password:</label>
                    <div className="col-sm-6">
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4" for="pwd">Re-Enter Password:</label>
                    <div className="col-sm-6">
                        <input type="password" className="form-control" id="pwd" placeholder="Re-Enter password" />
                    </div>
                </div>
                <div className="form-group">
                    <div class="col-sm-offset-2 col-sm-9">
                        <div className="checkbox">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-9">
                        <button type="submit" className="btn btn-default s-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}