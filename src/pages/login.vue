<script setup>
import { VForm } from 'vuetify/components'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import tree from '@images/pages/tree.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { emailValidator, requiredValidator } from '@validators'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/auth-v2-mask-dark.png'
import authV2MaskLight from '@images/pages/auth-v2-mask-light.png'

const isPasswordVisible = ref(false)

const authThemeImg = useGenerateImageVariant(
  authV2LoginIllustrationLight,
  authV2LoginIllustrationDark,
  authV2LoginIllustrationBorderedLight,
  authV2LoginIllustrationBorderedDark,
  true
)

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const route = useRoute()
const router = useRouter()
const ability = useAppAbility()

const errors = ref({
  userid: undefined,
  password: undefined,
})

const refVForm = ref()
const userid = ref('E580019')
const password = ref('E580019!')

const login = () => {
  axios
    .post('/auth/login', {
      userid: userid.value,
      password: password.value,
    })
    .then((r) => {
      const { accessToken, userData, userAbilities } = r.data

      localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
      ability.update(userAbilities)

      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('accessToken', JSON.stringify(accessToken))

      // Redirect to `to` query if exist or redirect to index route
      router.replace(route.query.to ? String(route.query.to) : '/')
    })
    .catch((e) => {
      const { errors: formErrors } = e.response.data

      errors.value = formErrors
      console.error(e.response.data)
    })
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) login()
  })
}
</script>

<template>
  <div>
    <!-- Title and Logo -->
    <div class="auth-logo d-flex align-start gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />

      <h1 class="font-weight-medium leading-normal text-2xl text-uppercase">
        {{ themeConfig.app.title }}
      </h1>
    </div>

    <VRow no-gutters class="auth-wrapper">
      <VCol lg="8" class="d-none d-lg-flex align-center justify-center position-relative">
        <VImg max-width="768px" :src="authThemeImg" class="auth-illustration" />
        <VImg :width="276" :src="tree" class="auth-footer-start-tree" />
        <VImg class="auth-footer-mask" :src="authThemeMask" />
      </VCol>

      <VCol cols="12" lg="4" class="auth-card-v2 d-flex align-center justify-center">
        <VCard flat :width="500" class="mt-12 mt-sm-0 pa-4">
          <VCardText>
            <VAlert color="primary" variant="tonal">
              <p class="text-caption mb-2">Admin id: <strong>E580019</strong> / Pass: <strong>E580019!</strong></p>
              <p class="text-caption mb-0">Client id: <strong>E620055</strong> / Pass: <strong>E620055!</strong></p>
            </VAlert>
          </VCardText>

          <VCardText>
            <VAlert color="grey lighten-5" variant="tonal">
              <h5 class="text-h5 d-flex justify-center mb-1">
                {{ themeConfig.app.titleName }}
              </h5>
            </VAlert>
          </VCardText>

          <VCardText>
            <VForm ref="refVForm" @submit.prevent="onSubmit">
              <VRow>
                <!-- userid -->
                <VCol cols="12">
                  <VTextField
                    v-model="userid"
                    label="아이디"
                    type="text"
                    :rules="[requiredValidator]"
                    :error-messages="errors.userid"
                  />
                </VCol>

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="password"
                    label="비밀번호"
                    :rules="[requiredValidator]"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :error-messages="errors.password"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <div class="d-flex align-center flex-wrap justify-space-between mt-4 mb-4">
                    <VBtn block type="submit"> 로그인 </VBtn>
                  </div>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use '@core/scss/template/pages/page-auth.scss';
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
