/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb9bbed4e361cf3e5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fed3562e91cfdf5686fc7a0b346d9614',

  PROVINCE: '陕西',
  CITY: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '悦悦',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ozFaa5nUEW8ZOoidGy931-hJubyI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'jft2SIJ6VfPPX7bSf1woHs16hDjntEUMfB4_8DXR4fc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1999', date: '03-08',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '08-31',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-20' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'jft2SIJ6VfPPX7bSf1woHs16hDjntEUMfB4_8DXR4fc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ozFaa5l4ZvrBY2jpn9MZpGrmII4I',
    }
  ],

}

module.exports = USER_CONFIG

