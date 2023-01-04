<script lang="ts" setup>
import {computed} from "vue";
import {darkTheme} from "naive-ui";
import {useAppStore} from "../core/stores";
import header from "../resources/images/header.png";
import doge from "../resources/images/doge.png";
import icon from "../resources/images/icon.png";
import wechat from "../resources/images/wechat.png";
import {useWindowSize} from "@vueuse/core";
import "../scripts/sakura.js";

const appStore = useAppStore();
const theme = computed(() => {
  return appStore.theme === 'light' ? null : darkTheme;
});

const {width} = useWindowSize();
</script>

<template>
  <n-config-provider :theme="theme" class="h-full">
    <n-layout class="h-full">
      <n-layout-content class="pb-20">
        <n-space vertical>
          <n-el class="bg-pink-300 mx-auto text-center relative">
            <n-image :src="header" class="lg:w-[30%]" preview-disabled/>

            <n-text class="absolute w-full lg:text-4xl left-1/2 bottom-[10px] lg:bottom-[25px] translate-x-[-50%]">
              『泣かないで 猫 全部大丈夫だ』
            </n-text>
          </n-el>

          <n-card class="lg:w-3/5 lg:mx-auto mx-2.5 text-left">
            <n-thing>
              <template #header>
                <n-space>
                  <n-popover placement="right">
                    <template #trigger>
                      <n-image :img-props="{ class: 'w-[5em]' }" :src="icon"
                               preview-disabled/>
                    </template>

                    <n-el class="p-2.5 info">
                      <n-space>
                        <n-space size="small">
                          <n-image :img-props="{ class: 'w-[7.5em]' }" :src="icon" preview-disabled/>

                          <n-thing class="p-2.5 pl-0 pb-0">
                            <template #header>
                              Abnormal Cat
                            </template>

                            <template #description>
                              <n-el class="leading-none">
                                <n-text class="text-sm">
                                  不要哭 猫. 一切会好起来的
                                  <br>
                                  不要放弃 一切的一切都是该到来的 加油!
                                  <br>
                                  向前奔跑 不要停下来啊！
                                </n-text>
                              </n-el>
                            </template>
                          </n-thing>
                        </n-space>
                      </n-space>
                    </n-el>
                  </n-popover>

                  <n-el>
                    你好! 我是
                    <n-popover>
                      <template #trigger>
                        <n-text type="info">Abnormal Cat</n-text>
                      </template>

                      猫猫头子
                    </n-popover>
                    , 来自中国, 你也可以叫我

                    <n-popover>
                      <template #trigger>
                        <n-text type="info">ABC</n-text>
                      </template>

                      猫 小霖
                    </n-popover>
                  </n-el>
                </n-space>
              </template>

              <template #header-extra>
                <n-space>
                  <n-popover>
                    <template #trigger>
                      <n-tag type="success">
                        <n-text type="success">二刺螈</n-text>
                      </n-tag>
                    </template>

                    不要瞧不起二次元啊喂!
                  </n-popover>

                  <n-popover>
                    <template #trigger>
                      <n-space>
                        <n-tag type="success">
                          <n-text type="success">萌新建模师</n-text>
                        </n-tag>

                        <n-tag type="success">
                          <n-text type="success">萌新画师</n-text>
                        </n-tag>
                      </n-space>
                    </template>

                    手废了, 不要找我 呜呜
                  </n-popover>
                </n-space>
              </template>

              <template #description>
                <n-text :depth="3">
                  故事的后续: 猫猫辜负了一个他很喜欢很喜欢的人, 为了表达歉意, 他选择了自己的方式来为他喜欢的赎罪
                  <br>
                  猫猫回头望着曾经带着自己离开天台的那个她, 独自向着自己的方向走去, 而她也为了自己的路独自․․․․․․ 不ǃ
                  和他们一起踏上了旅途
                  <br>
                  或许有一天猫猫知道自己错了, 重新回过了头, 但是那时的猫猫或许早已经把心放在了他那...
                </n-text>
              </template>

              <n-divider>作品</n-divider>

              <n-grid :x-gap="10" :y-gap="10" cols="1 768:2">
                <n-grid-item>
                  <n-popover>
                    <template #trigger>
                      <iframe class="w-full" src="//player.bilibili.com/player.html?aid=389441034"/>
                    </template>

                    和朋友做的小玩意
                  </n-popover>
                </n-grid-item>

                <n-grid-item>
                  <n-popover>
                    <template #trigger>
                      <iframe class="w-full" src="//player.bilibili.com/player.html?aid=687077176"/>
                    </template>

                    你也相信光嘛
                    <n-image :img-props="{ class: 'w-[1.5em]' }" :src="doge" preview-disabled/>
                  </n-popover>
                </n-grid-item>
              </n-grid>

              <n-divider>发现我</n-divider>

              <n-descriptions :columns="width <= 768 ? 1 : 3" bordered>
                <n-descriptions-item label="QQ">
                  <n-button href="https://wpa.qq.com/msgrd?uin=3318415065" tag="a" text type="primary">
                    3318415065
                  </n-button>
                </n-descriptions-item>

                <n-descriptions-item label="QQ 粉丝群">
                  <n-button href="https://jq.qq.com/?k=ILX65Kkg" tag="a" text type="primary">
                    762411557
                  </n-button>
                </n-descriptions-item>

                <n-descriptions-item label="微信">
                  <n-popover trigger="click">
                    <template #trigger>
                      <n-button text type="primary">Will_be_in_you_Lily</n-button>
                    </template>

                    <n-el class="lg:w-1/2 mx-auto text-center">
                      <n-image :src="wechat" preview-disabled/>
                    </n-el>
                  </n-popover>
                </n-descriptions-item>

                <n-descriptions-item label="哔哩哔哩">
                  <n-button href="https://space.bilibili.com/454104032" tag="a" text type="primary">
                    Abnormal Cat
                  </n-button>
                </n-descriptions-item>

                <n-descriptions-item label="VRChat">
                  <n-button href="https://vrchat.com/home/user/usr_245af4df-3061-4aef-86bc-0cd27668b8eb" tag="a" text
                            type="primary">
                    Abnormal cat
                  </n-button>
                </n-descriptions-item>

                <n-descriptions-item label="Discord">
                  abnormalcat#9023
                </n-descriptions-item>
              </n-descriptions>
            </n-thing>
          </n-card>

          <n-space class="lg:fixed left-0 top-0 h-[520px] lg:z-[1]" justify="center">
            <iframe class="h-full" src="//music.163.com/outchain/player?type=0&id=8019816940&auto=1&height=500"/>
          </n-space>
        </n-space>
      </n-layout-content>

      <n-layout-footer class="p-5 text-center" position="absolute">
        开发:
        <n-button href="https://zhazha120.cn" tag="a" text type="primary">
          渣渣120
        </n-button>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.info {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(../resources/images/bg.webp);
}
</style>