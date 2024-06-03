import React, { useState } from 'react';

const SurveyForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        dateOfBirth :'',
        contactNumber :'',
        favoriteFood: [],
        movieRating: '',
        radioRating: '',
        eatOutRating: '',
        tvRating: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            let updatedFood = [...formData.favoriteFood];
            if (checked) {
                updatedFood.push(value);
            } else {
                updatedFood = updatedFood.filter(food => food !== value);
            }
            setFormData({ ...formData, favoriteFood: updatedFood });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingSurveys = JSON.parse(localStorage.getItem('surveys')) || [];
        existingSurveys.push(formData);
        localStorage.setItem('surveys', JSON.stringify(existingSurveys));
        alert('Survey saved!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>_Survey</h1>
            </div>
            <div>
                <label>Full Name: </label>
                <input type="text" fullName="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Date Of Birth: </label>
                <input type="number" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
            </div>
            <div>
                <label>Contact Number: </label>
                <input type="number" name="email" value={formData.contactNumber} onChange={handleChange} required />
            </div>
            <div>
                <label>Favorite Food: </label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="favoriteFood"
                            value="Pizza"
                            checked={formData.favoriteFood.includes('Pizza')}
                            onChange={handleChange}
                        /> Pizza
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="favoriteFood"
                            value="Pasta"
                            checked={formData.favoriteFood.includes('Pasta')}
                            onChange={handleChange}
                        /> Pasta
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="favoriteFood"
                            value="Pap and Wors"
                            checked={formData.favoriteFood.includes('Pap and Wors')}
                            onChange={handleChange}
                        /> Pap and Wors
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="favoriteFood"
                            value="Other"
                            checked={formData.favoriteFood.includes('Other')}
                            onChange={handleChange}
                        /> Other
                    </label>
                </div>
            </div>
            <div>
                <label>Rate your agreement with the following statements (1 - Strongly Agree, 5 - Strongly Disagree): </label>
                <table>
                    <thead>
                        <tr>
                            <th>Statement</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I like to watch movies</td>
                            <td><input type="radio" name="movieRating" value="1" onChange={handleChange} /></td>
                            <td><input type="radio" name="movieRating" value="2" onChange={handleChange} /></td>
                            <td><input type="radio" name="movieRating" value="3" onChange={handleChange} /></td>
                            <td><input type="radio" name="movieRating" value="4" onChange={handleChange} /></td>
                            <td><input type="radio" name="movieRating" value="5" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>I like to listen to the radio</td>
                            <td><input type="radio" name="radioRating" value="1" onChange={handleChange} /></td>
                            <td><input type="radio" name="radioRating" value="2" onChange={handleChange} /></td>
                            <td><input type="radio" name="radioRating" value="3" onChange={handleChange} /></td>
                            <td><input type="radio" name="radioRating" value="4" onChange={handleChange} /></td>
                            <td><input type="radio" name="radioRating" value="5" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>I like to eat out</td>
                            <td><input type="radio" name="eatOutRating" value="1" onChange={handleChange} /></td>
                            <td><input type="radio" name="eatOutRating" value="2" onChange={handleChange} /></td>
                            <td><input type="radio" name="eatOutRating" value="3" onChange={handleChange} /></td>
                            <td><input type="radio" name="eatOutRating" value="4" onChange={handleChange} /></td>
                            <td><input type="radio" name="eatOutRating" value="5" onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>I like to watch TV</td>
                            <td><input type="radio" name="tvRating" value="1" onChange={handleChange} /></td>
                            <td><input type="radio" name="tvRating" value="2" onChange={handleChange} /></td>
                            <td><input type="radio" name="tvRating" value="3" onChange={handleChange} /></td>
                            <td><input type="radio" name="tvRating" value="4" onChange={handleChange} /></td>
                            <td><input type="radio" name="tvRating" value="5" onChange={handleChange} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SurveyForm;
