/*
 * @Author: mulingyuer
 * @Date: 2023-03-26 02:47:15
 * @LastEditTime: 2023-05-20 13:20:34
 * @LastEditors: mulingyuer
 * @Description: 表情数据
 * @FilePath: \Typecho_Theme_JJ\src\modules\comment\emoji\data.ts
 * 怎么可能会有bug！！！
 */
import yellowFace from "@/constant/emoji/yellowFace";
import hotWord from "@/constant/emoji/hotWord";
import bTv from "@/constant/emoji/bTv";
import yanWen from "@/constant/emoji/yanWen";
import { joinThemePath } from "@/utils/tool";

/** 表情数据 */
export const emojiData = [
	/** 小黄脸 */
	{
		id: "yellowFace",
		name: "小黄脸",
		icon: "/emoji/yellow_face/fa6dda8b876ed38609de38aa604be5ad109b8591.png",
		data: yellowFace
	},
	/** 热词 */
	{
		id: "hotWord",
		name: "热词",
		icon: "/emoji/hot_word/8d962fcf0b18761d5f4315a49b7ae428da08cf4a.png",
		data: hotWord,
		className: "hot-word"
	},
	/** 小电视 */
	{
		id: "bTv",
		name: "小电视",
		icon: "/emoji/b_tv/c1d59f439e379ee50eef488bcb5e5378e5044ea4.png",
		data: bTv
	},
	/** 颜文字 */
	{
		id: "yanWen",
		name: "颜文字",
		text: "（⌒▽⌒）",
		data: yanWen
	}
];

/** 表情地址前缀 */
let emojiPrefix = joinThemePath("static/images");

/** 获取表情地址前缀 */
export function getEmojiPrefix() {
	return emojiPrefix;
}
