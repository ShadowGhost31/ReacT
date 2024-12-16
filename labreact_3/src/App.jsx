import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import './App.css';

// Валідація за допомогою Yup
const signUpSchema = yup.object({
    name: yup
        .string()
        .min(1, 'Name is too short (minimum is 1 character)')
        .required('Name is required'),
    email: yup
        .string()
        .email('Email must be a valid email address')
        .required('Email is required'),
    emailConfirm: yup
        .string()
        .oneOf([yup.ref('email'), null], 'Email confirmation doesn’t match Email')
        .required('Re-enter email is required'),
    password: yup
        .string()
        .min(6, 'Password is too short (minimum is 6 characters)')
        .required('Password is required'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password confirmation doesn’t match Password')
        .min(6, 'Password confirmation is too short (minimum is 6 characters)')
        .required('Re-enter password is required'),
}).required();

const projectSchema = yup.object({
    projectName: yup
        .string()
        .min(3, 'Project name should have at least 3 characters')
        .required('Project name is required'),
    description: yup
        .string()
        .min(10, 'Description should be at least 10 characters')
        .required('Description is required'),
}).required();

const App = () => {

    const [isRegistered, setIsRegistered] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const { register: registerSignUp, handleSubmit: handleSubmitSignUp, formState: { errors: errorsSignUp }, setValue: setValueSignUp } = useForm({
        resolver: yupResolver(signUpSchema),
    });

    const { register: registerProject, handleSubmit: handleSubmitProject, formState: { errors: errorsProject } } = useForm({
        resolver: yupResolver(projectSchema),
    });

    const onSignUpSubmit = (data) => {
        console.log('Registration Data:', data);
        console.log('ReCAPTCHA Token:', recaptchaValue);  // Виводимо токен капчі в консоль
        setIsRegistered(true); // Перехід до форми створення проекту
    };

    const onProjectSubmit = (data) => {
        console.log('Project Data:', data);
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
        setValueSignUp('recaptcha', value); // Встановлюємо значення капчі у форму реєстрації
    };

    return (
        <div className="container">
            {!isRegistered ? (
                <>
                    <h2>Sign up</h2>
                    <form onSubmit={handleSubmitSignUp(onSignUpSubmit)} className="form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                {...registerSignUp('name')}
                                className={`input ${errorsSignUp.name ? 'input-error' : ''}`}
                            />
                            {errorsSignUp.name && <p className="error-message">{errorsSignUp.name.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                {...registerSignUp('email')}
                                className={`input ${errorsSignUp.email ? 'input-error' : ''}`}
                            />
                            {errorsSignUp.email && <p className="error-message">{errorsSignUp.email.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="emailConfirm">Re-enter email</label>
                            <input
                                id="emailConfirm"
                                type="email"
                                {...registerSignUp('emailConfirm')}
                                className={`input ${errorsSignUp.emailConfirm ? 'input-error' : ''}`}
                            />
                            {errorsSignUp.emailConfirm && <p className="error-message">{errorsSignUp.emailConfirm.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                {...registerSignUp('password')}
                                className={`input ${errorsSignUp.password ? 'input-error' : ''}`}
                            />
                            {errorsSignUp.password && <p className="error-message">{errorsSignUp.password.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="passwordConfirm">Re-enter password</label>
                            <input
                                id="passwordConfirm"
                                type="password"
                                {...registerSignUp('passwordConfirm')}
                                className={`input ${errorsSignUp.passwordConfirm ? 'input-error' : ''}`}
                            />
                            {errorsSignUp.passwordConfirm && <p className="error-message">{errorsSignUp.passwordConfirm.message}</p>}
                        </div>

                        <div className="form-group">
                            <label>
                                <input type="checkbox" {...registerSignUp('weeklyMix')} />
                                Send me a weekly mix of handpicked projects, plus occasional Kickstarter news
                            </label>
                        </div>

                        <div className="form-group">
                            <label>
                                <input type="checkbox" {...registerSignUp('kickstarterResearch')} />
                                Contact me about participating in Kickstarter research
                            </label>
                        </div>

                        <div className="form-group">
                            <ReCAPTCHA
                                sitekey="6LcL5JwqAAAAAEAqIjiJbDRlgnJYrgqnFUe6g5F3" // Введіть ваш ключ
                                onChange={handleRecaptchaChange}
                            />
                            {errorsSignUp.recaptcha &&
                                <p className="error-message">{errorsSignUp.recaptcha.message}</p>}
                        </div>

                        <button type="submit" className="submit-button">Sign up</button>
                    </form>
                </>
            ) : (
                <>
                    <h2>Create a project</h2>
                    <form onSubmit={handleSubmitProject(onProjectSubmit)} className="form">
                        <div className="form-group">
                            <label htmlFor="projectName">Project Name</label>
                            <input
                                id="projectName"
                                type="text"
                                {...registerProject('projectName')}
                                className={`input ${errorsProject.projectName ? 'input-error' : ''}`}
                            />
                            {errorsProject.projectName && <p className="error-message">{errorsProject.projectName.message}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Project Description</label>
                            <textarea
                                id="description"
                                {...registerProject('description')}
                                className={`input ${errorsProject.description ? 'input-error' : ''}`}
                            />
                            {errorsProject.description && <p className="error-message">{errorsProject.description.message}</p>}
                        </div>

                        <button type="submit" className="submit-button">Create Project</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default App;
