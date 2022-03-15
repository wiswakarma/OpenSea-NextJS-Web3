import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId : '89ixlimc',
    dataset:'production',
    apiVersion: '2021-03-25',
    token : 'skeHJojIuV81mPYo2gYlPzimSwMFFPSoqaiuk1on2MdRepGKodhCTn4g55Z70Sb41h8cfx3IAF2yH8LhFdP1ZIOADsl5w0P423tjj6HKLYYp9ULrqIAe8SNKPnKdrNSASell2vrphgArLNPr61JEJKeaVbfFSYblYiDcKokpb171doCeurdD',
    useCdn: false
})