/**
 *
 * @param {String} password
 */

function solve(password) {
    function validatePass() {
        let errors = [];
        let letters = 0;
        let digits = 0;

        // Validate password length
        if (password.length < 6 || password.length > 10) {
            errors.push("Password must be between 6 and 10 characters");
        }

        // Validate password contains only digits and letters
        for (let i = 0; i < password.length; i++) {
            if (
                ("a" <= password[i] && password[i] <= "z") ||
                ("A" <= password[i] && password[i] <= "Z")
            ) {
                letters++;
            } else if ("0" <= password[i] && password[i] <= "9") {
                digits++;
            }
    
        }
        
        if (digits + letters !== password.length) 
            errors.push("Password must consist only of letters and digits");

        // Validate password contains at least 2 digits
        if (digits < 2) errors.push("Password must have at least 2 digits");

        return errors;
    }

    result = validatePass();
    result.length > 0 ? result.forEach(x => console.log(x)) : console.log("Password is valid");
    
}

solve("logIn");
solve('MyPass123');
solve('Pa$s$s');