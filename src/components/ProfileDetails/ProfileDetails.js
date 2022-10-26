import './ProfileDetails.css';
const ProfileDetails = () => {
    return (
        <>
            <div className="profile-details-container">
                <div className="profile-details-image">
                    
                    
                </div>
                <p>Select your gender</p>
                <form>
                    <div>
                        <input type="radio" id="male" name="male" value="Male" />
                        <label htmlFor="male">Male</label>
                        <br />
                    </div>
                    <div>
                        <input type="radio" id="male" name="male" value="Male" />
                        <label htmlFor="female">Female</label>
                        <br />
                    </div>
                    
                </form>
            </div>
        </>
    );
};
export default ProfileDetails;