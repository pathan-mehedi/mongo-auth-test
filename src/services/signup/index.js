export const regirsterNewUser = async (formData) => {
    try {
        const respose = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const finalResponse = await respose.json();
        return finalResponse;
    } catch (error) {
        console.log("Error in registerNewUser", error.message);
    }
};
