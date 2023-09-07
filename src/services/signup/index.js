export const registerNewUser = async (formData) => {
    try {
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const finalResponse =  await response.json();
        return finalResponse;
    } catch (error) {
        console.log("Error in registerNewUser", error.message);
    }
};
