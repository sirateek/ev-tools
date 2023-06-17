<template>
  <v-layout>
    <v-app-bar :elevation="0">
      <v-app-bar-title class="text-left">
        <div class="flex flex-row gap-9">
          <div class="flex">EV Tools</div>
          <v-card
            v-if="$router.currentRoute.value.meta.displayTitle"
            variant="outlined"
            class="flex px-2 py-1"
          >
            <div class="text-sm font-light">
              {{ $router.currentRoute.value.meta.displayTitle }}
            </div>
          </v-card>
        </div>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-menu
        location="bottom"
        content-class="rounded-xl"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon>
            <v-avatar> </v-avatar>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>

    <v-main>
      <div class="flex">
        <div class="max-w-md">
          <v-card class="flex-0 h-screen rounded-0">
            <v-list lines="one" nav>
              <v-list-group
                v-for="(group, i) in navigationGroupItem"
                :key="i"
                :prepend-icon="group.icon"
                :value="group.title"
              >
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    :title="group.title"
                  ></v-list-item>
                </template>

                <v-list-item
                  v-for="(item, i) in group.items"
                  :key="i"
                  :value="i"
                  :title="item.title"
                  @click="navigateToRoute(item.name)"
                ></v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </div>

        <div class="flex-1 mx-4 my-5">
          <div class="flex flex-col h-[87vh]">
            <v-card
              v-if="$router.currentRoute.value.meta.breadcrumbs"
              class="rounded-2xl mb-2 justify-left flex items-center"
            >
              <v-btn
                icon
                size="small"
                class="secondary text-center"
                @click="$router.go(-1)"
              >
                <v-icon class="text-center" icon="mdi-chevron-left"></v-icon>
              </v-btn>

              <customized-bread-crumbs
                :breadcrumbs="$router.currentRoute.value.meta.breadcrumbs"
              ></customized-bread-crumbs>
            </v-card>

            <v-card class="flex rounded-2xl h-full">
              <div class="h-full w-full">
                Test
                <slot></slot>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
  import router from "@/router";
  import { defineComponent, ref } from "vue";
  import { Layout } from "@/layouts/layout";
  import navigationGroup from "@/layouts/MainLayout/navigationItem";
  import CustomizedBreadCrumbs from "./components/CustomizedBreadCrumbs.vue";
  import { useUserProfile } from "./composable/useUserProfile";

  export default defineComponent({
    name: Layout.MainLayout,
    components: {
      CustomizedBreadCrumbs,
    },
    setup() {
      const navigationGroupItem = ref(navigationGroup);
      const { userProfileAttribute } = useUserProfile();

      function navigateToRoute(name: string) {
        router.replace({ name: name });
      }

      return {
        navigationGroupItem,
        userProfileAttribute,
        navigateToRoute,
      };
    },
  });
</script>
