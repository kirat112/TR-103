let backendUrl = "https://finance-tracker.chandanbir.me"
if(import.meta.env.VITE_ENVIRONMENT === "dev") {
    backendUrl = "http://localhost:3001"
}
console.log(backendUrl)
export {backendUrl}
