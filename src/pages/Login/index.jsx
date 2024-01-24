import React, { useState } from 'react'

import styles from './style.module.scss'

const LoginPage = () => {
  const [formData, setFormData] = useState({
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
            <h2 className={styles.formTitle}>Login</h2>
            <form id="add-account-form" >
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

export default LoginPage