# Telegraph-Images

### 限制

1.由于图片文件实际存储于Telegraph，Telegraph限制上传的图片大小最大为5MB
2.由于使用Cloudflare的网络，图片的加载速度在某些地区可能得不到保证
3.Cloudflare Function免费版每日限制100,000个请求（即上传或是加载图片的总次数不能超过100,000次）如超过可能需要选择购买Cloudflare Function的付费套餐，如开启图片管理功能还会存在KV操作数量的限制，如超过需购买付费套餐

## 更新日志


## 环境变量配置
在cf部署的环境变量中配置:
AUTH_CODEALLOWED_DOMAINS
  说明：每行一个域名或者空格隔开
  例如：tg-gallery.pages.dev tg-graph-69b.pages.dev
AUTH_CODE
  说明：上传权限认证
  例如：accd03
BASIC_PASS
BASIC_USER

RESOUCE404
RESOUCE302

## KV配置
| 变量名称 | KV 命名空间                |
| -------- | -------------------------- |
| img_url  | 选择提前创建好的KV储存空间 |
