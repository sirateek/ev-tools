import { reactive } from "vue";

export function useUserProfile() {
  const userProfileAttribute = reactive({
    isLoading: true,
    profile: {
      profileImage: "",
      displayName: "",
      email: "",
    },
  });

  async function getUserProfile() {
    // TODO: To be implemented
  }

  getUserProfile();

  return {
    userProfileAttribute,
  };
}
