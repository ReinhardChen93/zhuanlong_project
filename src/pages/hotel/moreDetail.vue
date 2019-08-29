<template>
	<div class="hello box box-3" >
		<!--头部-->
		<div class="head">
			<img src="../../../static/images/left_b.png" @click="back" />
			<span>
				<span>酒店名称</span>
			</span>
			<span><img src="../../../static/images/collect.png"/><img src="../../../static/images/phone.png"/></span>
		</div>
		<div class="Hotel_introduction">
			<ul>
				<li @click="changeActive(1)" :class="{active:active=='1'}">酒店介绍</li>
				<li @click="changeActive(2)" :class="{active:active=='2'}">入住需知</li>
				<li @click="changeActive(3)" :class="{active:active=='3'}">设施</li>
				<li @click="changeActive(4)" :class="{active:active=='4'}">周边</li>
			</ul>
			<div class="Hotel_introduction_box site" >
				<h1>樱花谷客栈</h1>
				<h2>房间数：120间</h2>
				<p>花道人间《樱花谷客栈》位于中国转龙道项目花道人间主题公园内，客栈于2016年8月开始建设，2017年4月完工，经长达半年多的内部装饰及房屋布草工作，室外有休闲露台，配置遮阳休闲桌椅，阁下可在露台感受清晨温暖的阳光，呼吸清新的空气，聆听山间的鸟语，闻着芬芳的花香，凝视日落前天边的晚霞。 </p>
				<img src="../../../static/images/test.png" />
				<span>最近装修时间：2019年</span>
			</div>
			<div class="Hotel_introduction_box1 site">
				<h1>入住需知</h1>
				<h2>入离时间</h2>
				<p>入住时间：入住当天14:00以后</p>
				<p>退房时间：离店当天12:00以前</p>
				<h2>外宾</h2>
				<p>可接待外宾，请持护照到前台办理入住。</p>
				<h2>宠物</h2>
				<p>允许携带宠物，不收取额外费用。</p>
				<h2>膳食安排</h2>
				<p>酒店提供免费早餐服务，每个房间限定两人。</p>
			</div>
			<div class="Hotel_introduction_box2 site" >
				<h2>酒店设施</h2>

				<div class="Hotel_introduction_box3">
					<h1>网络设施</h1>
					<ol>
						<li>
							<img src="../../../static/images/service.png" />
							<span>WIFI</span>
						</li>
						<li>
							<img src="../../../static/images/service.png" />
							<span>WIFI</span>
						</li>
					</ol>
				</div>
				<div class="Hotel_introduction_box3 site">
					<h1>网络设施</h1>
					<ol>
						<li>
							<img src="../../../static/images/service.png" />
							<span>WIFI</span>
						</li>
						<li>
							<img src="../../../static/images/service.png" />
							<span>WIFI</span>
						</li>
					</ol>
				</div>
			</div>

			<div class="Hotel_introduction_box4" >
				<h1>周边</h1>
				<div>
					<h2>地铁站</h2>
					<p>酒店周边没有地铁站</p>
				</div>
				<div>
					<h2>机场</h2>
					<p>昆明长水国际机场：距离酒店60km</p>
				</div>
				<div>
					<h2>火车站</h2>
					<p>昆明站：距离酒店40km</p>
					<p>昆明南站：距离酒店50km</p>
				</div>
				<div>
					<h2>汽车站</h2>
					<p>转龙汽车客运站：距离酒店2km</p>
				</div>
				<div>
					<h2>购物服务</h2>
					<p>花道人间购物广场：距离酒店0.5km</p>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				active:'1'
			}
		},
		created() {

		},
		mounted() {
			//监听屏幕滚动
			window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			changeActive(index) {
				//改变active
				this.active = index;
				$('html,body').scrollTop($(".site").eq(index - 1).offset().top - 50);
			},
			handleScroll() {
				//屏幕滚动
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var _this = this;
				$(".site").each(function(i) {
					//getBoundingClientRect用于获取某个元素相对于视窗的位置集合
					var top = document.getElementsByClassName('site')[i].getBoundingClientRect().top;
					//当滚动到指定位置改变headActive值
					if(top<110){
						_this.active=i+1
					}
				});

			},
			back() {
				//回到酒店详情
				this.$router.push({
					path: '/Hotel_detail'
				})
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.head {
		height: 45px;
		padding: 0 16px;
		line-height: 45px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: white;
		z-index: 999;
	}
	
	.head img {
		width: 14px;
	}
	
	.head span:nth-of-type(2) img:nth-of-type(1) {
		width: 20px;
		margin-right: 20px;
	}
	
	.head span:nth-of-type(2) img:nth-of-type(2) {
		width: 18px;
	}
	.Hotel_introduction {
		padding-top: 45px;
		position: relative;
		overflow: scroll;
	}
	
	.Hotel_introduction ul {
		display: flex;
		flex-direction: row;
		padding:0px 16px;
		position: fixed;
		background: white;
		width: 100%;
	}
	
	.Hotel_introduction ul li {
		margin-right: 20px;
		padding-bottom: 4px;
	}
	
	.Hotel_introduction_box {
		padding:0px 16px;
		margin-top: 40px;
		border-bottom: 5px solid #F2F2F2;
		padding-bottom: 20px;
	}
	
	.Hotel_introduction_box img {
		height: 190px;
		width: 100%;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	
	.Hotel_introduction_box h1 {
		font-size: 18px;
		color: #202020;
	}
	
	.Hotel_introduction_box h2 {
		font-size: 12px;
		color: #555555;
		margin-top: 10px;
		margin-bottom: 16px;
	}
	
	.Hotel_introduction_box p {
		font-size: 12px;
		color: #555555;
		line-height: 18px;
		text-align: justify;
	}
	
	.Hotel_introduction_box span {
		font-size: 12px;
		color: #555555;
	}
	
	.Hotel_introduction_box2 {
		font-size: 14px;
		color: #353535;
		padding:20px 16px;
		border-bottom: 5px solid #F2F2F2;
	}
	
	.Hotel_introduction_box2 h2 {
		font-size: 18px;
		color: #202020;
	}
	
	.Hotel_introduction_box3 ol {
		display: flex;
		flex-direction: row;
	}
	
	.Hotel_introduction_box3 ol li {
		margin-right: 14px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.Hotel_introduction_box3 ol li img {
		width: 20px;
		margin-bottom: 10px;
	}
	
	.Hotel_introduction_box3 ol li span {
		font-size: 10px;
		color: #555555;
	}
	
	.Hotel_introduction_box3 h1 {
		font-size: 14px;
		color: #353535;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	
	.Hotel_introduction_box1 {
		padding:20px 16px;
		border-bottom: 5px solid #F2F2F2;
	}
	
	.Hotel_introduction_box1 h1 {
		font-size: 18px;
		color: #202020;
	}
	
	.Hotel_introduction_box1 h2 {
		font-size: 14px;
		color: #353535;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	
	.Hotel_introduction_box1 span {
		font-size: 14px;
		color: #353535;
	}
	
	.Hotel_introduction_box1 p {
		font-size: 14px;
		color: #353535;
	}
	
	.Hotel_introduction_box4 {
		padding:20px 16px;
	}
	
	.Hotel_introduction_box4 h1 {
		font-size: 18px;
		color: #202020;
	}
	
	.Hotel_introduction_box4 div {}
	
	.Hotel_introduction_box4 div h2 {
		font-size: 14px;
		color: #353535;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	
	.Hotel_introduction_box4 div p {
		font-size: 14px;
		color: #353535;
	}
	.active{
		border-bottom: 3px solid #E82004;
		font-weight: bold;
	}
</style>