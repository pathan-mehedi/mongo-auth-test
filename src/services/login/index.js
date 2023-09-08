export const loginUser = async (formData) => {
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const finalResponse = await response.json();
        return finalResponse;
    } catch (error) {
        console.log(error);
    }
};
