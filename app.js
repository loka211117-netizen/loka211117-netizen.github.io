export const categoryTargets = { daily: 3000, academic: 3000, ielts: 6000, business: 2000, tcm: 2000, gaokao: 3500 };
const categoryLimits = { daily: 220, academic: 220, gaokao: 240, ielts: 240, tcm: 150, business: 130 };
const categoryMeta = {
  daily: { label: "Daily 日常", short: "Daily · 日常" },
  academic: { label: "Academic 学术", short: "Academic · 学术" },
  ielts: { label: "IELTS 雅思", short: "IELTS · 雅思" },
  business: { label: "Business 商务", short: "Business · 商务" },
  tcm: { label: "TCM 中医", short: "TCM · 中医" },
  gaokao: { label: "Gaokao 高考", short: "Gaokao · 高考" }
};

const vocabularySeeds = {
  daily: `
achieve|实现；完成
admit|承认
afford|负担得起
agree|同意
apologise|道歉
arrange|安排
avoid|避免
belong|属于
borrow|借入
cancel|取消
choose|选择
complain|抱怨
confirm|确认
consider|考虑
contact|联系
continue|继续
decide|决定
deliver|递送
depend|取决于
describe|描述
discover|发现
discuss|讨论
encourage|鼓励
expect|期待
explain|解释
forget|忘记
forgive|原谅
improve|改善
include|包括
invite|邀请
manage|设法完成
mention|提到
notice|注意到
offer|提供
prefer|更喜欢
prepare|准备
promise|承诺
protect|保护
realise|意识到
receive|收到
recommend|推荐
refuse|拒绝
remember|记得
remind|提醒
repair|修理
replace|替换
reply|回复
request|请求
reserve|预订
return|返回；归还
share|分享
suggest|建议
support|支持
trust|信任
worry|担心
appointment|预约
commute|通勤
wallet|钱包
umbrella|雨伞
elevator|电梯
landlord|房东
roommate|室友
takeaway|外卖
available|有空的；可用的
balance|平衡
behaviour|行为
benefit|益处
budget|预算
choice|选择
community|社区
conversation|对话
decision|决定
direction|方向
environment|环境
experience|经历；经验
favour|帮助；赞同
habit|习惯
health|健康
information|信息
journey|旅程
knowledge|知识
lifestyle|生活方式
memory|记忆
message|信息
neighbour|邻居
opinion|意见
opportunity|机会
permission|许可
plan|计划
pressure|压力
progress|进步
purpose|目的
relationship|关系
responsibility|责任
routine|日常安排
safety|安全
schedule|日程
service|服务
solution|解决办法
suggestion|建议
transport|交通
advice|建议
comfortable|舒适的
convenient|方便的
crowded|拥挤的
effective|有效的
familiar|熟悉的
flexible|灵活的
friendly|友好的
healthy|健康的
helpful|有帮助的
honest|诚实的
independent|独立的
local|当地的
necessary|必要的
patient|有耐心的
personal|个人的
practical|实用的
private|私人的
quiet|安静的
responsible|负责的
serious|严肃的
simple|简单的
similar|相似的
social|社交的
special|特别的
successful|成功的
suitable|合适的
usual|通常的
valuable|有价值的
recently|最近
probably|可能
especially|尤其
actually|实际上
immediately|立即
finally|最终
fortunately|幸运的是
generally|通常
gradually|逐渐
hardly|几乎不
nearly|几乎
obviously|显然
perhaps|或许
properly|恰当地
regularly|定期地
suddenly|突然
instead|反而；代替
otherwise|否则
although|虽然
unless|除非
within|在……之内
without|没有
according to|根据
as soon as|一……就……
at least|至少
in advance|提前
in public|公开地
on purpose|故意地
take care|保重；小心
work out|解决；锻炼
weather|天气
temperature|温度
traffic|交通状况
rent|租金
receipt|收据
password|密码
account|账户
battery|电池
charger|充电器
screen|屏幕
ticket|票
platform|站台
luggage|行李
pharmacy|药房
symptom|症状
fever|发烧
cough|咳嗽
allergy|过敏
emergency|紧急情况
address|地址
location|位置
distance|距离
entrance|入口
exit|出口
queue|队伍
delay|延误
refund|退款
exchange|兑换；更换
discount|折扣
cash|现金
change|零钱
menu|菜单
order|点单；订单
ingredient|配料
vegetarian|素食者
workout|锻炼
medicine|药物
laundry|洗衣
package|包裹
document|文件
form|表格
signature|签名
update|更新
download|下载
upload|上传
connection|连接
signal|信号
device|设备
reservation|预订
passenger|乘客
destination|目的地
route|路线
neighbourhood|街区
supermarket|超市
checkout|结账处
membership|会员资格
notification|通知
privacy|隐私
emergency contact|紧急联系人
grocery shopping|购买日用品
`.trim(),
  academic: `
academic|学术的
analyse|分析
approach|方法；途径
argument|论点
assess|评估
assumption|假设
cite|引用
coherent|连贯的
concept|概念
conclude|得出结论
conduct|开展；实施
consistent|一致的
context|语境；背景
contrast|对比
criterion|标准
data|数据
define|定义
demonstrate|论证；展示
derive|获得；源自
distribution|分布
evaluate|评价
evidence|证据
factor|因素
framework|框架
hypothesis|假设
identify|识别
indicate|表明
interpret|解释
methodology|研究方法
objective|目标；客观的
outcome|结果
perspective|视角
principle|原则
procedure|程序
publish|发表
qualitative|定性的
quantitative|定量的
relevant|相关的
reliable|可靠的
research|研究
significant|显著的
source|来源
structure|结构
theory|理论
variable|变量
abstract|摘要；抽象的
allocate|分配
alternative|替代方案
apparent|明显的
approximate|大约的
category|类别
clarify|澄清
comprehensive|全面的
comprise|包括
consequently|因此
considerable|相当大的
constitute|构成
correlation|相关性
crucial|关键的
deduce|推断
distinguish|区分
emerge|出现
emphasise|强调
empirical|实证的
establish|确立
exclude|排除
explicit|明确的
facilitate|促进
fundamental|根本的
imply|暗示
inherent|固有的
integrate|整合
justify|证明……合理
literature|文献
maintain|维持；主张
mechanism|机制
notion|观念
obtain|获得
paradigm|范式
parameter|参数
preliminary|初步的
prevalent|普遍的
primary|主要的
proportion|比例
refine|改进
scope|范围
sector|领域；部门
subsequent|随后的
substantiate|以证据支持
synthesise|综合
valid|有效的
validity|有效性
articulate|清晰表达
bias|偏见
capacity|能力；容量
complexity|复杂性
component|组成部分
constraint|限制
dimension|维度
discipline|学科；自律
diverse|多样的
ethical|合乎伦理的
formulate|制定；阐述
implication|影响；含义
innovation|创新
insight|深刻见解
integrity|诚信；完整性
logical|合乎逻辑的
nuanced|细致入微的
phenomenon|现象
rigorous|严谨的
scholarship|学术研究
scrutinise|仔细审视
tentative|暂定的
transparent|透明的
underlying|潜在的
whereas|然而；而
conversely|相反地
furthermore|此外
nevertheless|尽管如此
predominantly|主要地
respectively|分别地
thereby|从而
assignment|作业
attendance|出勤
bibliography|参考书目
campus|校园
dissertation|学位论文
essay|短文；论文
examination|考试
grade|成绩
lecture|讲座；课程
major|主修专业
minor|辅修专业
note-taking|记笔记
plagiarism|抄袭
professor|教授
seminar|研讨课
syllabus|课程大纲
tutorial|辅导课
citation|引用
summary|摘要；总结
thesis|论文
peer review|同行评审
critical thinking|批判性思维
learning outcome|学习成果
academic performance|学业表现
reference list|参考文献表
research question|研究问题
sample size|样本量
case study|案例研究
fieldwork|实地研究
survey|调查
questionnaire|问卷
findings|研究结果
limitation|局限
recommendation|建议
appendix|附录
table|表格
figure|图表
database|数据库
journal|学术期刊
coursework|课程作业
annotate|加注释
assessment|评估；考核
author|作者
chapter|章节
conclusion|结论
course|课程
curriculum|课程体系
data collection|数据收集
definition|定义
participant|参与者
publication|出版物；发表
reading list|阅读清单
reliability|可靠性
interpretation|解释；解读
literature review|文献综述
research design|研究设计
primary source|一手资料
secondary source|二手资料
empirical evidence|实证证据
theoretical framework|理论框架
statistical analysis|统计分析
data analysis|数据分析
group project|小组项目
oral presentation|口头汇报
final examination|期末考试
office hours|教师答疑时间
academic advisor|学业导师
degree programme|学位课程
undergraduate|本科生
postgraduate|研究生
tuition fee|学费
credit|学分
elective|选修课
compulsory course|必修课
deadline|截止日期
extension|延期
feedback|反馈
revision|修改；复习
draft|草稿
outline|提纲
quotation|引用语
academic integrity|学术诚信
laboratory|实验室
experiment|实验
tutorial group|辅导小组
marking criteria|评分标准
learning strategy|学习策略
research ethics|研究伦理
control group|对照组
independent variable|自变量
dependent variable|因变量
academic writing|学术写作
conference paper|会议论文
course material|课程资料
graduation requirement|毕业要求
student union|学生会
exchange programme|交换项目
`.trim(),
  gaokao: `
adversity|逆境
advocate|提倡
alleviate|减轻
ambition|抱负
aspiration|志向
attitude|态度
challenge|挑战
circumstance|情形
commitment|投入；承诺
confidence|信心
cooperation|合作
courage|勇气
creativity|创造力
determination|决心
dignity|尊严
effort|努力
enthusiasm|热情
failure|失败
generosity|慷慨
gratitude|感恩
independence|独立
inspiration|启发
kindness|善意
motivation|动力
optimism|乐观
patience|耐心
perseverance|毅力
potential|潜力
resilience|韧性
self-discipline|自律
achievement|成就
adapt|适应
appreciate|欣赏；感激
assume|假定
attempt|尝试
concentrate|专注
contribute|贡献
convince|说服
cope|应对
decline|下降；拒绝
deteriorate|恶化
devote|投入
enable|使能够
empower|使有能力
enhance|提升
ensure|确保
expand|扩大
explore|探索
influence|影响
inspire|激励
overcome|克服
participate|参与
persevere|坚持不懈
persuade|劝服
prevent|预防
promote|促进
reflect|反思
strengthen|加强
transform|改变
volunteer|志愿服务
accessible|可获得的
beneficial|有益的
competitive|竞争激烈的
confident|自信的
considerate|体贴的
creative|有创造力的
determined|坚定的
efficient|高效的
energetic|精力充沛的
essential|必要的
harmful|有害的
indispensable|不可或缺的
inevitable|不可避免的
meaningful|有意义的
memorable|难忘的
optimistic|乐观的
outstanding|杰出的
positive|积极的
reasonable|合理的
remarkable|非凡的
significant|重要的
thoughtful|深思熟虑的
traditional|传统的
urgent|紧急的
environmental|环境的
educational|教育的
technological|科技的
meanwhile|与此同时
therefore|因此
moreover|此外
however|然而
in addition|此外
as a result|因此
in contrast|相比之下
in my view|在我看来
to begin with|首先
above all|最重要的是
make a difference|产生影响
take responsibility|承担责任
broaden horizons|开阔视野
achieve a goal|实现目标
face a challenge|面对挑战
acquire|获得；习得
admire|钦佩
announce|宣布
apply|申请；应用
argue|争论；论证
attract|吸引
celebrate|庆祝
compare|比较
compete|竞争
concern|涉及；担忧
consume|消耗；消费
create|创造
damage|损害
develop|发展
educate|教育
examine|检查；考查
exist|存在
express|表达
ignore|忽视
organise|组织
preserve|保护；保存
reduce|减少
respect|尊重
respond|回应
survive|生存
vary|变化
affect|影响
provide|提供
recognise|认出；承认
observe|观察
ability|能力
absence|缺席；缺乏
accept|接受
accident|事故；意外
action|行动
activity|活动
advantage|优势
advice|建议
allow|允许
ancient|古代的
anxious|焦虑的
appearance|外表；出现
approach|方法；接近
article|文章
audience|观众；听众
balance|平衡
behave|表现；举止
belief|信念
benefit|益处
brave|勇敢的
breathe|呼吸
career|职业
cause|原因；导致
chance|机会
choice|选择
community|社区
condition|条件；状况
connect|连接
culture|文化
curious|好奇的
custom|习俗
danger|危险
decision|决定
degree|程度；学位
detail|细节
direction|方向
disease|疾病
energy|精力；能源
environment|环境
experience|经历；经验
famous|著名的
favour|帮助；赞同
freedom|自由
friendship|友谊
future|未来
habit|习惯
health|健康
helpful|有帮助的
honest|诚实的
importance|重要性
improve|改善
include|包括
information|信息
interest|兴趣；利益
knowledge|知识
language|语言
local|当地的
manage|管理；设法做到
manner|方式；礼貌
memory|记忆
method|方法
mistake|错误
nature|自然；本质
necessary|必要的
opportunity|机会
ordinary|普通的
patient|耐心的；病人
peace|和平
performance|表现；演出
possible|可能的
practice|练习；实践
prepare|准备
pressure|压力
problem|问题
progress|进步
protect|保护
purpose|目的
quality|质量；品质
reason|原因；理由
relationship|关系
result|结果
safety|安全
service|服务
situation|情况
skill|技能
solution|解决办法
special|特别的
success|成功
support|支持
tradition|传统
travel|旅行
trust|信任
valuable|有价值的
waste|浪费；废物
wealth|财富
welcome|欢迎
wonder|想知道；奇迹
worry|担心
youth|青年时期
abroad|在国外
active|积极的；活跃的
calm|冷静的
careful|仔细的
familiar|熟悉的
responsibility|责任
society|社会
technology|科技
communication|交流
`.trim(),
  ielts: `
accommodate|容纳；适应
accumulate|积累
adequate|足够的
ambiguous|模棱两可的
compelling|有说服力的
controversial|有争议的
conventional|传统的
detrimental|有害的
diversity|多样性
dominant|占主导的
dramatic|显著的
exacerbate|使恶化
feasible|可行的
fluctuate|波动
inequality|不平等
marginalise|边缘化
mitigate|缓解
paraphrase|改写
plausible|合理的
profound|深远的
sustainable|可持续的
unprecedented|前所未有的
viable|可行的
vulnerable|脆弱的
outweigh|超过；胜过
cohesion|凝聚力
consensus|共识
consumption|消费
contemporary|当代的
demographic|人口统计的
disparity|差距
infrastructure|基础设施
intervention|干预
legislation|立法
productivity|生产力
prosperity|繁荣
regulation|监管
urbanisation|城市化
wellbeing|福祉
accountability|问责
affordable|负担得起的
automation|自动化
carbon emissions|碳排放
climate change|气候变化
consumer behaviour|消费者行为
cost of living|生活成本
digital divide|数字鸿沟
economic growth|经济增长
environmental impact|环境影响
gender equality|性别平等
globalisation|全球化
healthcare system|医疗体系
public transport|公共交通
renewable energy|可再生能源
social mobility|社会流动
work-life balance|工作生活平衡
ageing population|人口老龄化
cultural heritage|文化遗产
educational attainment|教育成就
mental health|心理健康
allocate resources|分配资源
address an issue|处理问题
adopt a policy|采取政策
bridge the gap|缩小差距
curb pollution|遏制污染
foster innovation|促进创新
impose restrictions|实施限制
meet demand|满足需求
pose a threat|构成威胁
raise awareness|提高意识
reach a consensus|达成共识
reduce dependency|减少依赖
tackle inequality|应对不平等
yield benefits|带来益处
drawback|缺点
incentive|激励因素
concession|让步
notwithstanding|尽管
arguably|可以说
comparatively|相对而言
disproportionately|不成比例地
fundamentally|根本上
increasingly|越来越
inevitably|不可避免地
notably|尤其；显著地
relatively|相对地
simultaneously|同时
substantially|大幅地
to a large extent|在很大程度上
from my perspective|在我看来
a growing body of evidence|越来越多的证据
long-term consequences|长期后果
pressing concern|紧迫问题
potential solution|潜在解决办法
public expenditure|公共支出
quality of life|生活质量
social interaction|社会互动
technological advancement|技术进步
the wider community|更广泛的社会
band score|雅思分数等级
abandon|放弃
alter|改变
boost|促进；提高
constrain|限制
diminish|减少；削弱
eliminate|消除
generate|产生
inhibit|抑制；阻碍
offset|抵消
reinforce|加强
substitute|替代
trend|趋势
majority|大多数
minority|少数
resident|居民
migration|迁移
congestion|拥堵
housing shortage|住房短缺
natural resources|自然资源
fossil fuels|化石燃料
waste management|废物管理
income gap|收入差距
job security|工作保障
remote work|远程工作
media coverage|媒体报道
policy maker|政策制定者
public health|公共卫生
population growth|人口增长
living standards|生活水平
traffic congestion|交通拥堵
anticipate|预期
apparent|明显的
attain|达到；获得
attribute|归因于；属性
capacity|能力；容量
cease|停止
coherent|连贯的
coincide|同时发生；一致
commodity|商品
compensate|补偿
compile|汇编；编制
comprehensive|全面的
comprise|由……组成
concentrate|集中
conduct|实施；行为
consequence|后果
considerable|相当大的
contradict|反驳；矛盾
crucial|关键的
demonstrate|证明；展示
derive|获得；源于
detect|发现；检测
deviate|偏离
discriminate|区别；歧视
diverse|多样的
domestic|国内的；家庭的
dominate|占主导
encounter|遇到
emphasis|重点；强调
enhance|提升
equivalent|相等的；等同物
estimate|估计
evident|明显的
exceed|超过
exploit|利用；剥削
facilitate|促进
factor|因素
fundamental|根本的
identify|识别
illustrate|说明；举例
imply|暗示
impose|强加；实施
incidence|发生率
indicate|表明
infrastructure investment|基础设施投资
innovate|创新
integrate|整合
interpret|解释
intervene|干预
justify|证明合理
maintain|维持；主张
mechanism|机制
modify|修改
monitor|监测
mutual|相互的
neglect|忽视
objective|目标；客观的
obtain|获得
overall|总体的
perceive|察觉；认为
persist|持续；坚持
phenomenon|现象
priority|优先事项
prohibit|禁止
proportion|比例
pursue|追求
radical|根本的；激进的
recover|恢复
regulate|监管；调节
relevant|相关的
reluctant|不情愿的
require|需要
resolve|解决；决心
retain|保留
reveal|揭示
significant|显著的
stable|稳定的
strategy|策略
sustain|维持
transform|转变
transmit|传递
valid|有效的
welfare|福利
cultural diversity|文化多样性
educational access|教育机会
government funding|政府资助
housing affordability|住房负担能力
energy consumption|能源消耗
food security|粮食安全
water scarcity|水资源短缺
urban planning|城市规划
rural development|乡村发展
income inequality|收入不平等
public services|公共服务
social welfare|社会福利
technological change|技术变革
employment opportunities|就业机会
academic achievement|学业成就
environmental protection|环境保护
population density|人口密度
life expectancy|预期寿命
healthcare access|医疗服务可及性
crime rate|犯罪率
road safety|道路安全
online learning|在线学习
screen time|屏幕使用时间
consumer spending|消费者支出
tourism industry|旅游业
cultural identity|文化认同
international cooperation|国际合作
`.trim(),
  tcm: `
acupuncture|针灸
moxibustion|艾灸
cupping therapy|拔罐疗法
tuina|推拿
herbal medicine|中药
herbal formula|方剂
medicinal herb|中药材
meridian|经络
acupoint|穴位
qi|气
blood|血
essence|精
body fluid|津液
yin and yang|阴阳
five elements|五行
zang-fu organs|脏腑
constitution|体质
syndrome differentiation|辨证
treatment principle|治则
pattern identification|辨证论治
qi deficiency|气虚
blood deficiency|血虚
yin deficiency|阴虚
yang deficiency|阳虚
qi stagnation|气滞
blood stasis|血瘀
phlegm dampness|痰湿
damp heat|湿热
wind cold|风寒
wind heat|风热
liver qi stagnation|肝气郁结
spleen qi deficiency|脾气虚
kidney yang deficiency|肾阳虚
heart blood deficiency|心血虚
tongue body|舌质
tongue coating|舌苔
pulse diagnosis|脉诊
wiry pulse|弦脉
slippery pulse|滑脉
weak pulse|弱脉
rapid pulse|数脉
slow pulse|迟脉
palpation|触诊
inspection|望诊
auscultation and olfaction|闻诊
inquiry|问诊
chief complaint|主诉
medical history|病史
onset|起病
duration|病程
prognosis|预后
contraindication|禁忌证
indication|适应证
therapeutic effect|治疗作用
adverse reaction|不良反应
dosage|剂量
decoction|汤剂
prescription|处方
clinical manifestation|临床表现
differential diagnosis|鉴别诊断
pain relief|止痛
inflammation|炎症
fatigue|疲劳
insomnia|失眠
palpitation|心悸
dizziness|眩晕
headache|头痛
abdominal distension|腹胀
poor appetite|食欲不振
shortness of breath|气短
spontaneous sweating|自汗
night sweating|盗汗
cold limbs|四肢发冷
lower back soreness|腰酸
menstrual disorder|月经失调
fertility|生育能力
rehabilitation|康复
holistic|整体性的
therapeutic|治疗性的
practitioner|执业医师
acupuncture needle|针灸针
needling sensation|针感
deqi sensation|得气感
needle manipulation|行针手法
tonifying method|补法
reducing method|泻法
acupuncture prescription|针灸处方
auricular acupuncture|耳针
scalp acupuncture|头针
electroacupuncture|电针
warm needling|温针灸
trigger point|触发点
range of motion|关节活动度
muscle tension|肌肉紧张
chronic pain|慢性疼痛
acute pain|急性疼痛
numbness|麻木
swelling|肿胀
tenderness|压痛
follow-up consultation|复诊
collateral vessel|络脉
extraordinary meridian|奇经八脉
conception vessel|任脉
governing vessel|督脉
channel pathway|经脉循行
yuan-source point|原穴
luo-connecting point|络穴
back-shu point|背俞穴
front-mu point|募穴
five-shu points|五输穴
ear acupoint|耳穴
ashi point|阿是穴
needle insertion|进针
needle retention|留针
needle withdrawal|出针
sterile needle|无菌针
acupuncture depth|针刺深度
acupuncture angle|针刺角度
manual stimulation|手法刺激
electrical stimulation|电刺激
heat lamp therapy|红外线照射
fire needling|火针
plum blossom needle|梅花针
bloodletting therapy|刺络放血
moving cupping|走罐
retained cupping|留罐
herbal granules|中药颗粒
patent medicine|中成药
raw herbs|中药饮片
herb compatibility|中药配伍
dosage adjustment|剂量调整
formula modification|方剂加减
treatment course|疗程
clinical response|临床反应
tongue colour|舌色
tongue shape|舌形
pulse rate|脉率
pulse strength|脉力
floating pulse|浮脉
deep pulse|沉脉
thready pulse|细脉
full pulse|实脉
empty pulse|虚脉
cold syndrome|寒证
heat syndrome|热证
exterior syndrome|表证
interior syndrome|里证
excess syndrome|实证
deficiency syndrome|虚证
follow-up assessment|复诊评估
`.trim(),
  business: `
agenda|议程
agreement|协议
asset|资产
brand|品牌
budget|预算
client|客户
competitor|竞争对手
contract|合同
deadline|截止日期
demand|需求
department|部门
employee|员工
employer|雇主
feedback|反馈
investment|投资
invoice|发票
leadership|领导力
management|管理
market|市场
negotiation|谈判
objective|目标
partnership|合作关系
profit|利润
proposal|提案
revenue|收入
stakeholder|利益相关者
strategy|策略
supplier|供应商
target|目标
transaction|交易
approve|批准
collaborate|协作
delegate|委派
launch|推出
negotiate|谈判
prioritise|确定优先顺序
recruit|招聘
resolve|解决
retain|留住
streamline|简化流程
profitable|有利可图的
productive|高效的
professional|专业的
strategic|战略性的
competitive advantage|竞争优势
customer satisfaction|客户满意度
market share|市场份额
operating cost|运营成本
performance review|绩效评估
project timeline|项目时间表
return on investment|投资回报率
sales forecast|销售预测
supply chain|供应链
business model|商业模式
cash flow|现金流
annual report|年度报告
reach an agreement|达成协议
meet a deadline|按时完成
follow up|跟进
keep me updated|随时告知进展
benchmark|基准
campaign|推广活动
commission|佣金
compliance|合规
consultant|顾问
consumer|消费者
distribution|分销
efficiency|效率
expenditure|支出
franchise|特许经营
inventory|库存
margin|利润率
merger|合并
portfolio|业务组合
promotion|促销；晋升
quotation|报价
retail|零售
wholesale|批发
business trip|商务出差
board meeting|董事会会议
acquisition|收购
advertising|广告
annual budget|年度预算
balance sheet|资产负债表
brand awareness|品牌认知度
business strategy|商业策略
capital|资本
cash reserve|现金储备
chief executive|首席执行官
commercial|商业的
company policy|公司政策
consumer demand|消费者需求
corporate culture|企业文化
cost reduction|成本削减
customer service|客户服务
decision-making|决策
delivery schedule|交付时间表
digital marketing|数字营销
discount rate|折扣率
e-commerce|电子商务
financial statement|财务报表
gross profit|毛利润
human resources|人力资源
industry trend|行业趋势
interest rate|利率
key performance indicator|关键绩效指标
labour cost|人工成本
market analysis|市场分析
market research|市场调研
net profit|净利润
operating margin|营业利润率
payment terms|付款条件
productivity growth|生产率增长
project manager|项目经理
purchase order|采购订单
quarterly results|季度业绩
refund policy|退款政策
risk management|风险管理
sales target|销售目标
shareholder|股东
startup|初创企业
stock level|库存水平
team meeting|团队会议
trade agreement|贸易协议
training programme|培训计划
unit price|单价
vendor|供应商
warehouse|仓库
working capital|营运资金
workplace culture|职场文化
`.trim()
};

function parseVocabulary(category, raw) {
  return raw.split("\n").map((line) => line.trim()).filter(Boolean).slice(0, categoryLimits[category]).map((line, index) => {
    const [word, zh] = line.split("|");
    return { id: `${category}-${String(index + 1).padStart(3, "0")}`, word, zh, category, tags: [category, word.includes(" ") ? "phrase" : "word"] };
  });
}

export const vocabularyItems = Object.entries(vocabularySeeds).flatMap(([category, raw]) => parseVocabulary(category, raw));

export function searchVocabulary(items, query, category = "all") {
  const normalised = query.trim().toLocaleLowerCase();
  return items.filter((item) => {
    const categoryMatch = category === "all" || item.category === category;
    const searchMatch = !normalised || [item.word, item.zh, item.category, ...item.tags].join(" ").toLocaleLowerCase().includes(normalised);
    return categoryMatch && searchMatch;
  });
}

export function createDefaultState() {
  return {
    knownWords: {},
    wrongAnswers: {},
    quizStats: { correct: 0, attempts: 0 },
    plan: { dailyWords: 10, dailyMinutes: 15, weeklyWords: 50 },
    studyByDate: {},
    streak: 0,
    bestStreak: 0,
    lastStudyDate: "",
    writingDraft: "",
    writingNotes: "",
    speakingNotes: "",
    maskedTemplates: false
  };
}

export function recordQuizResult(targetState, quiz, isCorrect) {
  targetState.quizStats.attempts += 1;
  if (isCorrect) targetState.quizStats.correct += 1;
  const existing = targetState.wrongAnswers[quiz.id];
  if (!isCorrect && !existing) {
    targetState.wrongAnswers[quiz.id] = { itemId: quiz.id, category: quiz.category, active: true, correctStreak: 0, history: [] };
  }
  const record = targetState.wrongAnswers[quiz.id];
  if (!record) return;
  record.history.push({ correct: isCorrect, at: new Date().toISOString() });
  record.correctStreak = isCorrect ? record.correctStreak + 1 : 0;
  record.active = record.correctStreak < 3;
}

export function calculateCategoryProgress(items, knownWords) {
  return Object.fromEntries(Object.keys(categoryTargets).map((category) => {
    const learned = items.filter((item) => item.category === category && knownWords[item.id]).length;
    const target = categoryTargets[category];
    return [category, { learned, target, percentage: Math.min(100, Math.round((learned / target) * 100)) }];
  }));
}

const stateKey = "individualEnglishPlatformState";
const quotes = [
  ["This is not the end, but a new beginning.", "这不是结束，而是新的开始。"],
  ["The best way out is always through.", "走出困境最好的方法，就是穿过它。"],
  ["Well begun is half done.", "好的开始是成功的一半。"],
  ["A calm mind brings inner strength.", "平静的内心带来真正的力量。"],
  ["What we learn with pleasure, we never forget.", "愉快学到的东西，往往不会忘记。"],
  ["Great things are done by a series of small things brought together.", "伟大的成果，来自许多微小努力的积累。"],
  ["The journey of a thousand miles begins with a single step.", "千里之行，始于足下。"],
  ["Do not wait for opportunity. Create it.", "不要等待机会，要创造机会。"],
  ["Success is the sum of small efforts repeated day after day.", "成功，是日复一日微小努力的总和。"],
  ["It always seems impossible until it is done.", "事情在完成之前，看起来总是不可能。"],
  ["Knowledge speaks, but wisdom listens.", "知识使人表达，智慧使人倾听。"],
  ["A mountain is climbed one step at a time.", "再高的山，也要一步一步走过。"]
];

const templateItems = [
  { topic: "Teenage Pressure", title: "Education and pressure", paragraph: "Hong Kong has an ossified education system that focuses too much on academic results. Schools and parents often push students to perform well. As a result, many teenagers have little time to sleep or play.", zh: "香港教育制度过度重视学业成绩。学校和家长往往要求学生表现出色，因此许多青少年缺少睡眠和休闲时间。", pattern: "[Place] has a system that focuses too much on [result]. As a result, [group] have little time to [activity]." },
  { topic: "University Study", title: "Independent learning", paragraph: "University study demands more than attending lectures. Students must plan their time, review material regularly and ask for help before problems accumulate. Self-discipline is not about studying all day; it is about making useful decisions consistently.", zh: "大学学习不只是上课。学生需要规划时间、定期复习，并在问题累积前寻求帮助。自律不是整天学习，而是持续作出有效决定。", pattern: "[Activity] demands more than [basic action]. It is not about [A]; it is about [B]." },
  { topic: "Sleep", title: "Sleep and performance", paragraph: "Sleep is often treated as unimportant when students are under pressure. However, it directly affects memory, mood and concentration. Cutting sleep may save time tonight, but it usually reduces performance tomorrow.", zh: "学生面对压力时，睡眠常被视为不重要。然而，睡眠直接影响记忆、情绪和专注力。今晚少睡看似节省时间，却往往降低第二天的表现。", pattern: "[Topic] is often treated as unimportant. However, it directly affects [A], [B] and [C]." },
  { topic: "Technology", title: "Technology and attention", paragraph: "Technology has made information more accessible, but accessibility is not the same as understanding. When students move constantly between messages, videos and notes, their attention becomes fragmented.", zh: "科技令信息更容易获取，但获取信息不等于理解信息。学生不断切换信息、视频和笔记时，注意力会变得零散。", pattern: "[A] has made [B] more accessible, but [benefit] is not the same as [deeper result]." },
  { topic: "Health", title: "A sustainable routine", paragraph: "A healthy routine does not need to be perfect. It should be realistic enough to continue during a busy week. Small improvements in sleep, exercise and meals can produce meaningful results over time.", zh: "健康作息不必完美，但必须现实到能在繁忙的一周坚持。睡眠、运动和饮食上的小改善，长期可以产生有意义的结果。", pattern: "[Plan] does not need to be perfect. It should be realistic enough to [action]." },
  { topic: "Environment", title: "Shared responsibility", paragraph: "Environmental protection is not solely the responsibility of governments. Companies influence production, while individuals influence demand. Lasting change therefore requires coordinated action from all three groups.", zh: "环境保护不只是政府的责任。企业影响生产，个人影响需求，因此持久改变需要三方协同行动。", pattern: "[Issue] is not solely the responsibility of [group]. Lasting change requires coordinated action." },
  { topic: "Business", title: "Clear communication", paragraph: "A strong team does not avoid disagreement. Instead, it discusses problems early, defines responsibilities clearly and records the next action. Clear communication prevents small uncertainties from becoming expensive mistakes.", zh: "优秀团队不会回避分歧，而是尽早讨论问题、明确责任并记录下一步行动。清晰沟通能避免小疑问变成高成本错误。", pattern: "[Good group] does not avoid [problem]. Instead, it [A], [B] and [C]." },
  { topic: "TCM", title: "Learning Chinese medicine", paragraph: "Traditional Chinese medicine can appear abstract because its concepts are interconnected. Theory becomes clearer when students relate it to clinical cases, tongue findings and pulse patterns. This is how memorisation develops into clinical reasoning.", zh: "中医概念彼此关联，初学时可能显得抽象。把理论联系临床病例、舌象和脉象后，内容会更清晰，记忆也会逐渐转化为临床思维。", pattern: "[Subject] can appear abstract because [reason]. It becomes clearer when [method]." },
  { topic: "Acupuncture", title: "Introducing acupuncture", paragraph: "Acupuncture is a therapeutic method within traditional Chinese medicine. It involves stimulating specific points and should be performed by trained practitioners. Treatment must always take safety and the patient's condition into account.", zh: "针灸是中医的一种治疗方法，通过刺激特定穴位发挥作用，并应由受过训练的专业人员操作。治疗必须考虑安全与患者情况。", pattern: "[Therapy] is a therapeutic method within [system]. It involves [action]." },
  { topic: "Success", title: "Progress over perfection", paragraph: "People often delay action because they are waiting for the perfect moment. In reality, progress usually begins with an imperfect first step. What matters is the willingness to adjust and continue.", zh: "人们常因等待完美时机而延迟行动。现实中，进步通常始于并不完美的第一步，重要的是愿意调整并继续。", pattern: "People often [problem] because [reason]. In reality, [better idea]." },
  { topic: "Friendship", title: "Reliable friendship", paragraph: "A reliable friend does more than share pleasant moments. They listen without rushing to judge and remain present when life becomes difficult. Trust is built through consistent actions rather than impressive promises.", zh: "可靠的朋友不只是分享快乐时光。他们会不急于评判地倾听，也会在生活困难时陪伴。信任来自持续行动，而不是动听承诺。", pattern: "A reliable [person] does more than [simple action]. [Quality] is built through [action]." },
  { topic: "Public Health", title: "Prevention matters", paragraph: "Healthcare systems often spend more on treatment than prevention. Yet early education, regular screening and accessible primary care can reduce long-term costs. Prevention should therefore be treated as an investment rather than an expense.", zh: "医疗体系往往在治疗上的支出高于预防。然而，早期教育、定期筛查和可及的基层医疗能够降低长期成本，因此预防应被视为投资而非开支。", pattern: "[System] often spends more on [A] than [B]. [B] should be treated as an investment." }
];

const insertSnippets = {
  pressure: templateItems[0].paragraph,
  balanced: "Although academic results remain important, they should not be treated as the only measure of a student's ability. A balanced system can value achievement while protecting wellbeing."
};

let state = createDefaultState();
let selectedCategory = "all";
let visibleWordCount = 24;
let currentQuiz = null;
let quizAnswered = false;
let timerId = null;
let timerSeconds = 120;
let availableVoices = [];
let toastTimer = null;

function todayKey(date = new Date()) { return date.toISOString().slice(0, 10); }
function startOfWeek(date = new Date()) { const copy = new Date(date); const day = copy.getDay() || 7; copy.setDate(copy.getDate() - day + 1); copy.setHours(0, 0, 0, 0); return copy; }
function normaliseState(saved) {
  const fresh = createDefaultState();
  if (!saved || typeof saved !== "object") return fresh;
  return { ...fresh, ...saved, quizStats: { ...fresh.quizStats, ...(saved.quizStats || {}) }, plan: { ...fresh.plan, ...(saved.plan || {}) }, studyByDate: saved.studyByDate || {}, knownWords: saved.knownWords || {}, wrongAnswers: saved.wrongAnswers || {} };
}
function loadState() {
  try { return normaliseState(JSON.parse(localStorage.getItem(stateKey))); }
  catch { return createDefaultState(); }
}
function saveState() { localStorage.setItem(stateKey, JSON.stringify(state)); }
function todayStudy() { return state.studyByDate[todayKey()] || { words: 0, minutes: 0 }; }
function weeklyLearned() {
  const monday = startOfWeek();
  return Object.values(state.knownWords).filter((value) => {
    if (value === true) return false;
    const date = new Date(value);
    return !Number.isNaN(date.valueOf()) && date >= monday;
  }).length;
}
function updateStreak() {
  const today = todayKey();
  if (state.lastStudyDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  state.streak = state.lastStudyDate === todayKey(yesterday) ? state.streak + 1 : 1;
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  state.lastStudyDate = today;
}
function logStudy(kind, amount = 1) {
  const key = todayKey();
  state.studyByDate[key] ||= { words: 0, minutes: 0 };
  state.studyByDate[key][kind] = Math.max(0, (state.studyByDate[key][kind] || 0) + amount);
  updateStreak();
  saveState();
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]); }
function shuffle(items) { return [...items].sort(() => Math.random() - .5); }

function selectBritishVoice() {
  const preferred = [/Google UK English Female/i, /Microsoft Sonia/i, /Microsoft Libby/i, /Microsoft Ryan/i, /Daniel/i, /en-GB/i];
  for (const pattern of preferred) {
    const voice = availableVoices.find((candidate) => pattern.test(`${candidate.name} ${candidate.lang}`));
    if (voice) return voice;
  }
  return availableVoices.find((voice) => voice.lang?.toLowerCase().startsWith("en")) || null;
}
function speakText(text) {
  if (!("speechSynthesis" in window)) { showToast("Audio is unavailable in this browser. 当前浏览器不支持发音"); return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = selectBritishVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || "en-GB";
  utterance.rate = .88;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}
function speakWord(word) { speakText(word); }
function updateVoiceStatus() {
  availableVoices = "speechSynthesis" in window ? speechSynthesis.getVoices() : [];
}

function setPanel(panel) {
  document.querySelectorAll(".panel").forEach((node) => node.classList.toggle("active", node.id === `${panel}-panel`));
  document.querySelectorAll("[data-panel]").forEach((node) => node.classList.toggle("active", node.dataset.panel === panel));
  if (panel === "statistics") renderStatistics();
  if (panel === "wrongbook") renderWrongBook();
  if (panel === "vocabulary") renderVocabulary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderFilters() {
  const filters = [{ key: "all", label: "All 全部" }, ...Object.entries(categoryMeta).map(([key, value]) => ({ key, label: value.label }))];
  document.getElementById("categoryFilters").innerHTML = filters.map((filter) => `<button class="filter-chip ${filter.key === selectedCategory ? "active" : ""}" data-category="${filter.key}">${filter.label}</button>`).join("");
  document.getElementById("quizCategory").innerHTML = filters.map((filter) => `<option value="${filter.key}">${filter.label}</option>`).join("");
}

function renderVocabulary() {
  const query = document.getElementById("globalSearch").value;
  const filtered = searchVocabulary(vocabularyItems, query, selectedCategory);
  const visible = filtered.slice(0, visibleWordCount);
  document.getElementById("vocabularyCount").textContent = `${filtered.length} words · ${Object.keys(state.knownWords).filter((id) => state.knownWords[id]).length} mastered`;
  document.getElementById("wordGrid").innerHTML = visible.length ? visible.map((item) => {
    const mastered = Boolean(state.knownWords[item.id]);
    return `<article class="word-card ${mastered ? "is-mastered" : ""}" data-word-card="${item.id}" data-word-id="${item.id}" tabindex="0" role="button" aria-pressed="${mastered}" aria-label="${escapeHtml(item.word)}，点击切换学习状态">
      <div class="word-top"><div><h3>${escapeHtml(item.word)}</h3><p class="translation">${escapeHtml(item.zh)}</p></div></div>
      <div class="word-actions"><button class="audio-button" data-word-audio="${escapeHtml(item.word)}" title="Listen 发音" aria-label="Listen to ${escapeHtml(item.word)}"><i data-lucide="volume-2"></i></button></div>
    </article>`;
  }).join("") : `<div class="empty-state">No matching words · 没有找到相关词汇</div>`;
  document.getElementById("loadMoreWords").hidden = visible.length >= filtered.length;
  refreshIcons();
}

function renderDashboard() {
  const quote = quotes[Math.floor(Date.now() / 86400000) % quotes.length];
  document.getElementById("dailyQuote").textContent = quote[0];
  document.getElementById("dailyQuoteZh").textContent = quote[1];
  const study = todayStudy();
  document.getElementById("dailyGoalMetric").textContent = `${Math.min(study.words, state.plan.dailyWords)} / ${state.plan.dailyWords}`;
  document.getElementById("streakMetric").textContent = `${state.streak} ${state.streak === 1 ? "day" : "days"}`;
  document.getElementById("timeMetric").textContent = `${study.minutes} min`;
  const learnedThisWeek = weeklyLearned();
  document.getElementById("sidebarWeekly").textContent = `${learnedThisWeek} / ${state.plan.weeklyWords}`;
  document.getElementById("sidebarWeeklyBar").style.width = `${Math.min(100, learnedThisWeek / state.plan.weeklyWords * 100)}%`;
  const progress = calculateCategoryProgress(vocabularyItems, state.knownWords);
  const order = ["ielts", "academic", "gaokao", "daily", "business", "tcm"];
  document.getElementById("dashboardProgress").innerHTML = order.map((category) => progressCard(category, progress[category])).join("");
}

function progressCard(category, progress, statistics = false) {
  if (statistics) return `<article class="statistics-card"><div class="category-progress-head"><strong>${categoryMeta[category].short}</strong><b>${progress.percentage}%</b></div><div class="progress-track"><i style="width:${progress.percentage}%"></i></div><p>${progress.learned.toLocaleString()} of ${progress.target.toLocaleString()} words</p></article>`;
  return `<button class="category-progress-card interactive-card" data-open-category="${category}" type="button" aria-label="Open ${categoryMeta[category].label} vocabulary"><div class="category-progress-head"><strong>${categoryMeta[category].short}</strong><b>${progress.percentage}%</b></div><div class="progress-track"><i style="width:${progress.percentage}%"></i></div><p>${progress.learned.toLocaleString()} of ${progress.target.toLocaleString()} words</p><span class="card-arrow" aria-hidden="true"><i data-lucide="arrow-right"></i></span></button>`;
}

function renderStatistics() {
  const progress = calculateCategoryProgress(vocabularyItems, state.knownWords);
  const known = Object.keys(state.knownWords).filter((id) => state.knownWords[id]).length;
  const accuracy = state.quizStats.attempts ? Math.round(state.quizStats.correct / state.quizStats.attempts * 100) : 0;
  document.getElementById("statisticsSummary").innerHTML = `<article class="summary-card"><span>VOCABULARY LEARNED · 已掌握</span><strong>${known}</strong></article><article class="summary-card"><span>QUIZ ACCURACY · 正确率</span><strong>${accuracy}%</strong></article><article class="summary-card"><span>CURRENT STREAK · 连续学习</span><strong>${state.streak} days</strong></article>`;
  document.getElementById("statisticsGrid").innerHTML = Object.keys(categoryMeta).map((category) => progressCard(category, progress[category], true)).join("");
  document.getElementById("planDailyWords").value = state.plan.dailyWords;
  document.getElementById("planDailyMinutes").value = state.plan.dailyMinutes;
  document.getElementById("planWeeklyWords").value = state.plan.weeklyWords;
  updatePlanPreview();
}

function createQuiz(item = null) {
  const category = document.getElementById("quizCategory")?.value || "all";
  const pool = category === "all" ? vocabularyItems : vocabularyItems.filter((candidate) => candidate.category === category);
  const answer = item || pool[Math.floor(Math.random() * pool.length)];
  const direction = Math.random() > .5 ? "en-zh" : "zh-en";
  const answerText = direction === "en-zh" ? answer.zh : answer.word;
  const distractors = shuffle(pool.filter((candidate) => candidate.id !== answer.id)).map((candidate) => direction === "en-zh" ? candidate.zh : candidate.word).filter((value, index, list) => list.indexOf(value) === index).slice(0, 3);
  currentQuiz = { id: answer.id, category: answer.category, item: answer, direction, prompt: direction === "en-zh" ? answer.word : answer.zh, answer: answerText, options: shuffle([answerText, ...distractors]) };
  quizAnswered = false;
  renderQuiz();
}

function renderQuiz() {
  if (!currentQuiz) return createQuiz();
  document.getElementById("quizCard").innerHTML = `<span class="quiz-direction">${currentQuiz.direction === "en-zh" ? "ENGLISH → CHINESE · 英译中" : "CHINESE → ENGLISH · 中译英"}</span><h3>${escapeHtml(currentQuiz.prompt)}</h3><div class="quiz-options">${currentQuiz.options.map((option, index) => `<button class="quiz-option" data-quiz-option="${escapeHtml(option)}"><b>${String.fromCharCode(65 + index)}</b>&nbsp;&nbsp;${escapeHtml(option)}</button>`).join("")}</div><div id="quizFeedback"></div>`;
}

function answerQuiz(option, button) {
  if (quizAnswered) return;
  quizAnswered = true;
  const correct = option === currentQuiz.answer;
  recordQuizResult(state, currentQuiz, correct);
  logStudy("words", 0);
  document.querySelectorAll(".quiz-option").forEach((node) => { node.disabled = true; if (node.dataset.quizOption === currentQuiz.answer) node.classList.add("correct"); });
  if (!correct) button.classList.add("wrong");
  document.getElementById("quizFeedback").innerHTML = `<div class="quiz-feedback"><strong>${correct ? "Correct · 回答正确" : "Review this word · 需要复习"}</strong>Correct answer 正确答案：${escapeHtml(currentQuiz.answer)}<br>Learning tip：Read the pair once, then recall it without looking.</div><button class="primary-button quiz-next" id="nextQuiz">Next question 下一题 <i data-lucide="arrow-right"></i></button>`;
  saveState();
  updateWrongBadge();
  refreshIcons();
}

function updateWrongBadge() {
  const count = Object.values(state.wrongAnswers).filter((record) => record.active).length;
  document.getElementById("wrongBadge").textContent = count;
}

function renderWrongBook() {
  const activeRecords = Object.values(state.wrongAnswers).filter((record) => record.active);
  if (!activeRecords.length) { document.getElementById("wrongBookContent").innerHTML = `<div class="empty-state">No active mistakes · 暂无待复习错题</div>`; return; }
  const groups = Object.groupBy(activeRecords, (record) => record.category);
  document.getElementById("wrongBookContent").innerHTML = Object.entries(groups).map(([category, records]) => `<section class="wrong-group"><h3>${categoryMeta[category].label}</h3><div class="wrong-grid">${records.map((record) => {
    const item = vocabularyItems.find((candidate) => candidate.id === record.itemId);
    return `<article class="wrong-card"><h4>${escapeHtml(item.word)}</h4><p>${escapeHtml(item.zh)}</p><div class="review-dots" title="${record.correctStreak}/3 correct"><i class="${record.correctStreak > 0 ? "filled" : ""}"></i><i class="${record.correctStreak > 1 ? "filled" : ""}"></i><i class="${record.correctStreak > 2 ? "filled" : ""}"></i></div><button class="secondary-button" data-review-word="${item.id}">Review 复习</button></article>`;
  }).join("")}</div></section>`).join("");
}

function renderTemplates() {
  const container = document.getElementById("templateGrid");
  container.classList.toggle("templates-masked", state.maskedTemplates);
  container.innerHTML = templateItems.map((item) => `<article class="template-card"><span class="topic-pill">${item.topic}</span><h3>${item.title}</h3><p class="template-copy">${item.paragraph}</p><p class="template-zh">${item.zh}</p><p class="template-pattern">Pattern: ${item.pattern}</p><div class="template-actions"><span class="word-category">Writing · Speaking</span><button class="sound-button sentence-audio" data-sentence="${escapeHtml(item.paragraph)}"><i data-lucide="volume-2"></i> Listen 发音</button></div></article>`).join("");
  refreshIcons();
}

function toggleMastered(id) {
  if (state.knownWords[id]) { delete state.knownWords[id]; logStudy("words", -1); }
  else { state.knownWords[id] = new Date().toISOString(); logStudy("words", 1); }
  saveState();
  renderVocabulary();
  renderDashboard();
}

function savePlan() {
  state.plan.dailyWords = Math.max(1, Number(document.getElementById("planDailyWords").value) || 10);
  state.plan.dailyMinutes = Math.max(5, Number(document.getElementById("planDailyMinutes").value) || 15);
  state.plan.weeklyWords = Math.max(5, Number(document.getElementById("planWeeklyWords").value) || 50);
  saveState(); renderDashboard(); showToast("Learning plan saved · 学习计划已保存");
}

const planPresets = {
  light: { dailyWords: 5, dailyMinutes: 10, weeklyWords: 25 },
  standard: { dailyWords: 10, dailyMinutes: 15, weeklyWords: 50 },
  intensive: { dailyWords: 20, dailyMinutes: 30, weeklyWords: 100 }
};
function updatePlanPreview() {
  const words = Number(document.getElementById("planDailyWords").value);
  const minutes = Number(document.getElementById("planDailyMinutes").value);
  const weekly = Number(document.getElementById("planWeeklyWords").value);
  document.getElementById("planDailyWordsValue").textContent = words;
  document.getElementById("planDailyMinutesValue").textContent = minutes;
  document.getElementById("planWeeklyWordsValue").textContent = weekly;
  document.getElementById("planPreview").textContent = `${words} words · ${minutes} min daily · ${weekly} words weekly`;
  document.querySelectorAll("[data-plan-preset]").forEach((button) => {
    const preset = planPresets[button.dataset.planPreset];
    button.classList.toggle("active", preset.dailyWords === words && preset.dailyMinutes === minutes && preset.weeklyWords === weekly);
  });
}
function applyPlanPreset(name) {
  const preset = planPresets[name];
  document.getElementById("planDailyWords").value = preset.dailyWords;
  document.getElementById("planDailyMinutes").value = preset.dailyMinutes;
  document.getElementById("planWeeklyWords").value = preset.weeklyWords;
  updatePlanPreview();
}

function refreshIcons() { if (window.lucide) window.lucide.createIcons(); }
function setGreeting() {
  const hour = new Date().getHours();
  document.getElementById("greetingText").textContent = hour < 12 ? "Good morning." : hour < 18 ? "Good afternoon." : "Good evening.";
}
function startSpeakingTimer() {
  if (timerId) { clearInterval(timerId); timerId = null; timerSeconds = 120; document.getElementById("timerText").textContent = "02:00"; document.getElementById("startTimer").textContent = "Start 开始"; return; }
  document.getElementById("startTimer").textContent = "Reset 重置";
  timerId = setInterval(() => { timerSeconds -= 1; document.getElementById("timerText").textContent = `${String(Math.floor(timerSeconds / 60)).padStart(2,"0")}:${String(timerSeconds % 60).padStart(2,"0")}`; if (timerSeconds <= 0) { clearInterval(timerId); timerId = null; timerSeconds = 120; showToast("Time is up · 时间到"); } }, 1000);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const panelButton = event.target.closest("[data-panel]"); if (panelButton) setPanel(panelButton.dataset.panel);
    const categoryCard = event.target.closest("[data-open-category]"); if (categoryCard) { selectedCategory = categoryCard.dataset.openCategory; visibleWordCount = 24; document.getElementById("globalSearch").value = ""; renderFilters(); renderVocabulary(); setPanel("vocabulary"); }
    const planPreset = event.target.closest("[data-plan-preset]"); if (planPreset) applyPlanPreset(planPreset.dataset.planPreset);
    const filter = event.target.closest("[data-category]"); if (filter) { selectedCategory = filter.dataset.category; visibleWordCount = 24; renderFilters(); renderVocabulary(); }
    const audio = event.target.closest("[data-word-audio]"); if (audio) { speakWord(audio.dataset.wordAudio); return; }
    const sentence = event.target.closest("[data-sentence]"); if (sentence) speakText(sentence.dataset.sentence);
    const wordCard = event.target.closest(".word-card"); if (wordCard) toggleMastered(wordCard.dataset.wordCard);
    const quizOption = event.target.closest("[data-quiz-option]"); if (quizOption) answerQuiz(quizOption.dataset.quizOption, quizOption);
    const nextQuiz = event.target.closest("#nextQuiz"); if (nextQuiz) createQuiz();
    const review = event.target.closest("[data-review-word]"); if (review) { const item = vocabularyItems.find((candidate) => candidate.id === review.dataset.reviewWord); document.getElementById("quizCategory").value = item.category; createQuiz(item); setPanel("quiz"); }
    const insert = event.target.closest("[data-insert]"); if (insert) { const area = document.getElementById("writingDraft"); area.value += `${area.value ? "\n\n" : ""}${insertSnippets[insert.dataset.insert]}`; state.writingDraft = area.value; saveState(); }
  });
  document.addEventListener("keydown", (event) => { const card = event.target.closest?.(".word-card"); if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); toggleMastered(card.dataset.wordCard); } });
  const search = document.getElementById("globalSearch");
  search.addEventListener("input", () => { visibleWordCount = 24; if (search.value.trim()) setPanel("vocabulary"); renderVocabulary(); });
  document.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); search.focus(); } });
  document.getElementById("loadMoreWords").addEventListener("click", () => { visibleWordCount += 24; renderVocabulary(); });
  document.getElementById("randomWord").addEventListener("click", () => { const pool = searchVocabulary(vocabularyItems, "", selectedCategory); const item = pool[Math.floor(Math.random() * pool.length)]; search.value = item.word; renderVocabulary(); });
  document.getElementById("quizCategory").addEventListener("change", () => createQuiz());
  document.getElementById("savePlan").addEventListener("click", savePlan);
  ["planDailyWords", "planDailyMinutes", "planWeeklyWords"].forEach((id) => document.getElementById(id).addEventListener("input", updatePlanPreview));
  document.getElementById("toggleTemplateMask").addEventListener("click", () => { state.maskedTemplates = !state.maskedTemplates; saveState(); renderTemplates(); });
  document.getElementById("revealReading").addEventListener("click", (event) => { const box = document.getElementById("readingAnswers"); box.hidden = !box.hidden; event.currentTarget.textContent = box.hidden ? "Show answers 显示答案" : "Hide answers 隐藏答案"; });
  document.getElementById("saveWriting").addEventListener("click", () => { state.writingDraft = document.getElementById("writingDraft").value; state.writingNotes = document.getElementById("writingNotes").value; saveState(); showToast("Draft saved · 草稿已保存"); });
  document.getElementById("writingDraft").addEventListener("input", (event) => { state.writingDraft = event.target.value; saveState(); });
  document.getElementById("writingNotes").addEventListener("input", (event) => { state.writingNotes = event.target.value; saveState(); });
  document.getElementById("speakingNotes").addEventListener("input", (event) => { state.speakingNotes = event.target.value; saveState(); });
  document.getElementById("startTimer").addEventListener("click", startSpeakingTimer);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") saveState(); });
}

function init() {
  state = loadState();
  setGreeting();
  document.getElementById("writingDraft").value = state.writingDraft;
  document.getElementById("writingNotes").value = state.writingNotes;
  document.getElementById("speakingNotes").value = state.speakingNotes;
  renderFilters(); renderVocabulary(); renderDashboard(); renderTemplates(); renderStatistics(); renderWrongBook(); updateWrongBadge(); createQuiz(); updateVoiceStatus(); bindEvents(); refreshIcons();
  if ("speechSynthesis" in window) speechSynthesis.addEventListener("voiceschanged", updateVoiceStatus);
  setInterval(() => { if (document.visibilityState === "visible") { logStudy("minutes", 1); renderDashboard(); } }, 60000);
}

if (typeof document !== "undefined") init();
