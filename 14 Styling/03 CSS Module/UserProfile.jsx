// import style from './css/userProfile.module.css';
import style from './css/UserProfile.module.css';

function UserProfile ({user}) {
    return (
        <div>
            <div key={user.Name} className={style.cardStyle}>
            <img className={style.picture} src="public\vite.svg" alt="" />
            <div>
              <h3 className="info">
                {user.Name}---{user.Age}
              </h3>
            </div>
          </div>
        </div>
    )
}

export default UserProfile;