import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
    providers: [
        CredentialsProvider({
         
          name: 'Credentials',
       
          credentials: {
            username: { label: "Email", type: "email", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
           
            console.log({credentials})
           
      
            // If no error and we have user data, return it
           
            // Return null if user data could not be retrieved
            return null
          }
        })
      ]
})

export { handler as GET, handler as POST }