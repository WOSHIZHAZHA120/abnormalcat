<script lang="ts" setup>
import {computed} from "vue";
import {darkTheme} from "naive-ui";
import {useAppStore} from "../core/stores";
import {Check} from "@vicons/tabler";

const appStore = useAppStore();
const theme = computed(() => {
  return appStore.theme === 'light' ? null : darkTheme;
});

function toURL(target: string) {
  window.open(target);
}
</script>

<template>
  <n-config-provider :theme="theme" class="h-full">
    <n-layout class="h-full">
      <n-layout-content>
        <n-card class="mx-auto lg:w-3/5 mt-10 text-center">
          <template #header>
            <n-text>你好! 我是&nbsp;</n-text>

            <n-tooltip>
              <template #trigger>
                <n-text type="info">Abnormal Cat</n-text>
              </template>

              <n-text :depth="3" delete>猫咪老师</n-text>
            </n-tooltip>

            <n-text>,&nbsp;</n-text>
            <n-text>来自中国&nbsp;</n-text>

            <n-text>,&nbsp;</n-text>
            <n-text>你也可以叫我的简写&nbsp;</n-text>

            <n-tooltip>
              <template #trigger>
                <n-text type="info">ABC</n-text>
              </template>

              <n-text :depth="3" delete>猫猫头子</n-text>
            </n-tooltip>

            <n-space justify="center">
              <n-tag type="success">
                <n-space justify="space-between">
                  <n-text type="success">二刺螈</n-text>
                  <n-icon :component="Check"/>
                </n-space>
              </n-tag>

              <n-tag type="success">
                <n-space justify="space-between">
                  <n-text type="success">宅男&nbsp;</n-text>
                  <n-icon :component="Check"/>
                </n-space>
              </n-tag>

              <n-tag type="success">
                <n-space justify="space-between">
                  <n-text type="success">特摄迷</n-text>
                  <n-icon :component="Check"/>
                </n-space>
              </n-tag>
            </n-space>
          </template>

          <n-h6>
            <n-text>来自中国的男孩子 正在试图学习日语 (我很笨的拉)</n-text>
            <br>
            <n-text :depth="3" delete>沉迷于 VRChat</n-text>
            <n-text>,&nbsp;</n-text>
            <n-text>是个刚玩不久的萌新</n-text>
          </n-h6>

          <n-divider/>

          <n-h4>
            <n-text>故事的结尾他独自踏入了遥远的潮汐</n-text>
            <br>
            <n-text>我们终会相遇 只不过下次的相遇也只是过客而已</n-text>
            <br>
            <n-text>你与我终将追求自己的理想</n-text>
            <br>
            <n-text>此刻我就是守望在遥遥大海上的灯塔</n-text>
            <br>
            <n-text>宁愿做个傻子去默默看着 不渴望不遥及</n-text>
            <br>
            <n-text>因为守望在天台此刻我就是自己的主角</n-text>
            <br>
            <n-text>感谢你没有为我而流泪面具的底下永远是对你微笑</n-text>
          </n-h4>

          <n-divider>发现我</n-divider>

          <n-space justify="space-evenly">
            <n-a href="https://wpa.qq.com/msgrd?uin=3318415065">
              <n-tooltip>
                <template #trigger>
                  <n-image preview-disabled
                           src="https://shields.io/badge/qq-3318415065-121212?logo=Tencent%20QQ&style=for-the-badge"/>
                </template>

                <n-text>买黑或者白迪迦加这个</n-text>
                <n-divider vertical/>
                <n-text :depth="3" delete>是个吉祥物</n-text>
              </n-tooltip>
            </n-a>

            <n-a href="https://wpa.qq.com/msgrd?uin=3318415065">
              <n-tooltip>
                <template #trigger>
                  <n-image preview-disabled
                           src="https://shields.io/badge/qq粉丝群-762411557-121212?logo=Tencent%20QQ&style=for-the-badge"/>
                </template>

                <n-text>买奈克瑟斯加这个 (记得标明来意~)</n-text>
                <n-divider vertical/>
                <n-text :depth="3" delete>加入我们猫猫家族发扬光大</n-text>
              </n-tooltip>
            </n-a>

            <n-image preview-disabled
                     src="https://shields.io/badge/WeChat-SorryYuanQing-07C160?logo=WeChat&style=for-the-badge"/>

            <n-a href="https://vrchat.com/home/user/usr_245af4df-3061-4aef-86bc-0cd27668b8eb">
              <n-image preview-disabled
                       src="https://shields.io/badge/vrchat-abnormal%20cat-121212?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAAAAAAfl4auAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflChcHHRWa3clkAAAEfklEQVRIx+WXXYiUVRjHf+e878yaprsWlW1hobumZeVHRavgSriuriFFgXSVUmhCgohKF1mSpZARlFGUFUhEF114EUH51VK6lmaJqGle5EehYSuoi+vM+57z7+KdeXdm1plWu+ii52bOnHN+5znnP895zjNGXLvZf8H+hzCSpFi75t6YCQdkmYa2LYolSUiS0xprBu7P2GXykmQE8OZyW/9Y88CENyc2d/sXXku3fWw4E08ki/2zeZ1tNYP2pNtezeBDykcDtLx+v5nFKdzBXOUH5leS8nqGhyQpBLjASAqCiVS5pFkUokRQw0jOA4RlhMdKfcs4a/oWi01QgpPCJSFzbvCg4oSLGgbm4iUroG5oiC+JKFVGmDg5q7EthwDP4bvuWHKZ/U1Nzc3Nzc1N4+fvsr7CM5I0lSWKpEgrydKpWFKktdSxWe+nezOsKPyakdYwRpJKPRsmY9mGAMt2osF3E2ASNyYM179rXMUpS9utDZfZQQCyp/fiJ48BjFbt3db5+bQI3o4CVYONv2Uq5ufjxuPZfSHL7GQ/9zzQOu3JLffHwdEjVIXxdJDt/Q6P2Iqnvdjt/OXsowScqQFbZmQjtmIUum+Jx09whe4gCKkvj5T+sMZM9uzsDTwHD4e02QgAh4vFr3hzazlenkkcs8n8th9HJ5bZhakhgc3s/Ix47NhyuDLC2l8S21tgK/nbH8YCnre+zNnTu/PZ/JLABdVhw6Rxv7DtxWz3Hpg+1CU3o6sLsDb//GIFFb7K4Dhsw+w7wQ9nM8wp9ZHxo7ds8LUEA0MHYc8uviaqn5YMWlZ2fZyJ0JRKsSthS8ttETvohJbGxJFhUsuCp6g79jquNmzcsFbYe/CIpYPiJXKwfFCOd06FqgkDc+D4hrwPZ6RjAblx86k790a6XBXYMn0YPZssE8eVjFmWDcmx8XDga8LGN7Zg8pZZxKWnaX6Wut51tc+cXA6LaKcgl00+ltbngk+7rKsJW2aGkXVNDxYpjwEb37mIUKdq3CoAq7GrhtibXs16A5a2RxraWwkIWD4+XjGvIiJLclj6npw71pM+Pj7nC70X/qzMYSH9zLjhw1VMs1LWYwCj64e64j4L2TxMDlZmgWSK04wp5kijimtRgIfzV7nv0tVMv4bopiEVbAqdZ8PIVbWS0JBzUab3K6akgp0cwTxX4332ZUNeixl6oK8y+GihmbhoFFc2mxvVXNBPpud788eHu/26lannWBsyVC1KjG08IaekeDkAYF9JvieeXXD0vV3nrlyTyHafn77NYgBvD91rxrYunFDIZSrUUlI+d0W7pC9CuzQJIqeDhp/kkkpKBVguqqpXrDVB+ImiIrwvLUEoUbGaxXqC+v2KU9j1h2sUT93juO+8fCU8kNrTuBs2DTnwHL5fJA+oeIq0MQzWK3I6dLXblhRpsclsVU6HDD9eLeyVm8rIUyqHB1hvG5/dNOLkgpjaOaxagMejPwi/WXEtgiXHXm0zazdy3fGrPbMkOT1tbcDjKXs1sHfu5Xo780zfxTf/w/9VfwN7w8GvhqhOSwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0yM1QwNzoyOToyMSswMDowML5/hdsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMjNUMDc6Mjk6MjErMDA6MDDPIj1nAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC&style=for-the-badge"/>
            </n-a>

            <n-image preview-disabled
                     src="https://shields.io/badge/discord-abnormalcat%239023-121212?logo=discord&style=for-the-badge"/>
          </n-space>
        </n-card>
      </n-layout-content>

      <n-layout-footer class="p-5 text-center" position="absolute">
        <n-text>ひさしの猫の鳴き声を聞いてください</n-text>
        <n-divider vertical/>

        <n-button text @click="toURL('https://zhazha120.cn')">
          <n-text :depth="3">开发: 渣渣120</n-text>
        </n-button>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>
