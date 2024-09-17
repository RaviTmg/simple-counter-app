import { useState } from "react"

export default function InputTypes() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        dateOfBirth: null,
        isSubscribed: false,
        profileImage: null,
    });

    const handleChangeName = (e) => {
        const newName = e.target.value;
        setFormData({ ...formData, name: newName });
    };

    const handleChangePassword = e => {
        setFormData({ ...formData, password: e.target.value });
    };
    const handleChangeDateOfBirth = e => {
        setFormData({
            ...formData,
            dateOfBirth: e.target.value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
    };

    return (
        <div>
            <h1>
                Creating Forms in React
            </h1>
            <form 
                onSubmit={handleSubmit}
                style={{
                    display: "flex", 
                    flexDirection: "column"
                }}
            >
                <label>
                    Name:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={handleChangeName}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        value={formData.password}
                        onChange={handleChangePassword}
                    />
                </label>
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleChangeDateOfBirth}
                    />
                </label>
                <label>
                    Opt in for marketing emails:
                    <input
                        type="checkbox"
                        checked={formData.isSubscribed}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                isSubscribed: !formData.isSubscribed
                            });
                        }}
                    />
                </label>
                <label>
                    Select Image
                    <input
                        type="file"
                        accept="image/*"
                        onInput={(e) => {
                            const file = e.target.files[0]
                            setFormData({
                                ...formData,
                                profileImage: URL.createObjectURL(file)
                            });
                        }}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
            <div>
                <h3>your uploaded image is:</h3>
                <img
                    width={500}
                    src={formData.profileImage}
                    alt="profile image"
                />
            </div>
            
        </div>
    )
}
