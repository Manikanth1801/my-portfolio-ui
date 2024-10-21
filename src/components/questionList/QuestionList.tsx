import React, { useEffect, useState } from 'react';
import { IQuestion } from '../../utils/index.interface';
import { getQuestions } from '../../services/questionService';


const QuestionList: React.FC = () => {
    const [questions, setQuestions] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch questions when component mounts
        const fetchQuestions = async () => {
            try {
                const data = await getQuestions();
                setQuestions(data);
            } catch (err) {
                setError('Failed to load questions.');
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Questions List</h2>
            <ul>
                {questions?.results.map((question:any) => (
                    <li key={question.id}>
                        <strong>{question.question_text}</strong> - Published on {new Date(question.pub_date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;
