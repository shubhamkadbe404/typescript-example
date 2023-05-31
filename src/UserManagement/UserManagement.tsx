import styless from './UserManagement.module.scss'

const UserManagement:React.FC<{
    isLogin:Boolean;
}> = ({isLogin}) => {

const classValue = isLogin ? 'main-container' : 'main-container2';

return (
    <div>
        <div className={styless[classValue]}>
            <p>User Management Module 1</p>
        </div>
        </div>
)

}

export default UserManagement;