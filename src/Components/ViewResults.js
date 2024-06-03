import React, { useState, useEffect } from 'react';

const ViewResults = () => {
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        const storedSurveys = JSON.parse(localStorage.getItem('surveys')) || [];
        setSurveys(storedSurveys);
    }, []);

    return (
        <div>
            {surveys.length === 0 ? (
                <p>No Surveys Available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Foods</th>
                            <th>Movie Rating</th>
                            <th>Radio Rating</th>
                            <th>Eat Out Rating</th>
                            <th>TV Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {surveys.map((survey, index) => (
                            <tr key={index}>
                                <td>{survey.name}</td>
                                <td>{survey.email}</td>
                                <td>{survey.favoriteFood.join(', ')}</td>
                                <td>{survey.movieRating}</td>
                                <td>{survey.radioRating}</td>
                                <td>{survey.eatOutRating}</td>
                                <td>{survey.tvRating}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ViewResults;
