import axiosInstance from "../utils/axiosInstance";
import { IQuestion } from "../utils/index.interface";


// Function to get all questions
export const getQuestions = async (): Promise<IQuestion[]> => {
    try {
        const response = await axiosInstance.get<IQuestion[]>('api/questions/');
        return response.data;
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
};
