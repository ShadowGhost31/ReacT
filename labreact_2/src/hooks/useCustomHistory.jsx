import { useNavigate } from 'react-router-dom';

const useCustomHistory = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    const goBack = () => {
        window.history.back();
    };

    const goForward = () => {
        window.history.forward();
    };

    return { navigateTo, goBack, goForward };
};

export default useCustomHistory;
