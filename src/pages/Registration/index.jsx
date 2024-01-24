import React, { useState } from 'react'

import styles from './style.module.scss'

const Registration = () => {
    
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: ""
    });
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });
    };
  return (
    <div className={styles.formContainer}>
        <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Registration</h2>
            <form id="add-account-form" >
                <label>Fullname</label>
                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    required />
                <label>Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required />

                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required />
                
                <button type="submit">Submit</button>
            </form>  
        </div>
    </div>
  )
}

export default Registration