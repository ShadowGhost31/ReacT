import  { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

const FormSection = ({
                         step,
                         control,
                         setValue,
                         errors,
                         handleNextStep,
                         handlePreviousStep,
                         categories,
                         selectedCategory,
                         setSelectedCategory,
                         selectedSubCategory,
                         setSelectedSubCategory,
                     }) => {
    const [subCategories, setSubCategories] = useState([]);

   
    useEffect(() => {
        
        if (selectedCategory === "Technology") {
            setSubCategories(["Web", "Mobile", "AI"]);
        } else if (selectedCategory === "Design") {
            setSubCategories(["Graphic", "UI/UX", "Industrial"]);
        } else if (selectedCategory === "Art") {
            setSubCategories(["Painting", "Sculpture", "Photography"]);
        } else {
            setSubCategories([]); 
        }

       
        setValue("subCategory", "");
    }, [selectedCategory, setValue]);
    subCategories.filter(sub => sub !== selectedSubCategory);
    switch (step) {
        case 0:
            return (
                <div className="form-step">
                    <h2>Select a primary category for your new project.</h2>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <select
                                    {...field}
                                    value={field.value || selectedCategory} 
                                    onChange={(e) => {
                                        const category = e.target.value;
                                        setSelectedCategory(category); 
                                        setValue("category", category); 
                                    }}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && <span>{errors.category.message}</span>}
                            </div>
                        )}
                    />
                    <Controller
                        name="subCategory"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <select
                                    {...field}
                                    value={field.value || selectedSubCategory} 
                                    disabled={!selectedCategory} 
                                    onChange={(e) => {
                                        const subCategory = e.target.value;
                                        setSelectedSubCategory(subCategory); 
                                        setValue("subCategory", subCategory);
                                    }}
                                >
                                    <option value="">Select a subcategory</option>
                                    {subCategories.length > 0 ? (
                                        subCategories.map((sub) => (
                                            <option key={sub} value={sub}>
                                                {sub}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="">No subcategories available</option>
                                    )}
                                </select>
                                {errors.subCategory && <span>{errors.subCategory.message}</span>}
                            </div>
                        )}
                    />
                    <button
                        type="button"
                        onClick={handleNextStep}
                        disabled={!selectedCategory || !subCategories.length}
                    >
                        Next
                    </button>
                </div>
            );


        case 1:
            return (
                <div className="form-step">
                    <h2>Select your country</h2>
                    <Controller
                        name="country"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <select {...field}>
                                    <option value="">Select a country</option>
                                    <option value="usa">United States</option>
                                    <option value="canada">Canada</option>
                                    <option value="uk">United Kingdom</option>
                                </select>
                                {errors.country && <span>{errors.country.message}</span>}
                            </div>
                        )}
                    />
                    <button type="button" onClick={handlePreviousStep}>Back</button>
                    <button type="button" onClick={handleNextStep}>Next</button>
                </div>
            );

        case 2:
            return (
                <div className="form-step">
                    <h2>Personal Information</h2>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input {...field} placeholder="Name" />
                                {errors.name && <span>{errors.name.message}</span>}
                            </div>
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input {...field} placeholder="Email" />
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input {...field} type="password" placeholder="Password" />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                        )}
                    />
                    <Controller
                        name="terms"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <label>
                                    <input type="checkbox" {...field} />
                                    Send me a weekly mix of handpicked projects, plus occasional Kickstarter news
                                </label>
                                <div>
                                </div>
                                    <label>
                                        <input type="checkbox" {...field} />
                                        Contact me about participating in Kickstarter research
                                    </label>
                                    {errors.terms && <span>{errors.terms.message}</span>}
                                </div>
                                )}
                                />
                                <button type="submit">Submit</button>
                            </div>
                        );

        default:
            return null;
    }
};

export default FormSection;
