const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  {
    title: '帥狗聊動漫',
    feedID: 'HandsomeDoge',
    homepageURL: 'https://www.youtube.com/channel/UCQkAUoa28FZfffFI8tTQ71g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  
  {
    title: '工頭堅。旅行長',
    feedID: 'ctoken',
    homepageURL: 'https://www.youtube.com/channel/UCO6BMxjvslH_jSo7FZi6DcQ',
    itemFilters: ItemFiltersPreset.between6minTo60Min,
  },
  
  {
    title: '在下莫老师 玩 3C',
    feedID: 'zxmls',
    homepageURL: 'https://www.youtube.com/channel/UCAbLQp7cSr_hdPfr_Pe1S_g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '阿蝶-遊戲蝶聲 玩遊戲',
    feedID: 'AvelnaGaming',
    homepageURL: 'https://www.youtube.com/channel/UCu3z2_3jY7Z_52rZvO251Tg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  
  {
    title: '老阿貝聊AI繪圖',
    feedID: 'laoabe',
    homepageURL: 'https://www.youtube.com/channel/UCq0cd_ZAT08f3_nCL5goHcg',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  
  {
    title: '雀可美特',
    feedID: 'checkmatekuhaku',
    homepageURL: 'https://www.youtube.com/channel/UCoWl-esLvmLkh8iZzARvAJg',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },

  {
    title: 'IT咖啡馆',
    feedID: 'it-coffee',
    homepageURL: 'https://www.youtube.com/channel/UCXLV-KfDQAFUJ_as9H1Lfbw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '歪。講堂 Y.Talkroom 講 時事',
    feedID: 'ytalkroom',
    homepageURL: 'https://www.youtube.com/channel/UCgstGmtfQhk7EeY0xqPN7rQ',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
  {
    title: '赤狐與毛',
    feedID: 'Fox_Wing',
    homepageURL: 'https://www.youtube.com/channel/UCuPeD_7PYCBf9IBb__1m5Ng',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  }, 
  {
    title: 'JoeMultimedia 教 AI繪圖',
    feedID: 'JoeMultimedia',
    homepageURL: 'https://www.youtube.com/channel/UCMv267nynawErUJaQjsqiiQ',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('AI tutorial') >-1)) }
    ]
  },
   {
    title: 'Codegrid做HTML5',
    feedID: 'codegrid',
    homepageURL: 'https://www.youtube.com/channel/UC7pVho4O31FyfQsZdXWejEw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
    ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  },
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: 'IT咖啡馆',
      feedID: 'it-coffee',
      homepageURL: 'https://www.youtube.com/channel/UCXLV-KfDQAFUJ_as9H1Lfbw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
      ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
    },
  ]
}


module.exports = feedList
