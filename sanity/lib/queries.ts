import { defineQuery } from "next-sanity";

export const PROFILE_QUERY = defineQuery(`
  *[_type == "profile"][0] {
    _id,
    fullName,
    professionalTitle,
    headline,
    introduction,
    about,
    ministryStatement,
    email,
    location,
    linkedInUrl,
    githubUrl,
    availability,
    profileImage {
      asset-> {
        url
      },
      alt
    },
    resume {
      asset-> {
        url,
        originalFilename
      }
    }
  }
`);