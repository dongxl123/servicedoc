# ServiceDoc Examples
```java
   /**
      * @service UserService PaginationDTO<ProductInfoMoreDTO> multiSearchWithDynamicParamsByPagination2(Pagination pagination, Integer type)
      * @serviceAuthor dongxl
      * @serviceVersion 2.0.0
      * @serviceDscription service层doc测试
      * @serviceGroup 用户模块
      * @serviceName 用户查询
      * @serviceParam multiSearchWithDynamicParamsByPagination2
      * @serviceParam  (pagination) {Number} pageNum  第几页
      * @serviceParam  (pagination) {Number} pageSize 每页数量
      * @serviceParam  (pagination) {Number} totalRow 总数
      * @serviceParam  (pagination) {Number} totalPage 总页数
      * @serviceParam  (pagination) {Number} startRow 开始位置
      * @serviceParam  (type) {Number} type 类型
      * @serviceParamExample pagination
      * {"pageNum":1,"pageSize":50,"totalRow":2,"totalPage":1,"startRow":0,"type":1}
      * @serviceParamExample type
      * type = 1
      * @serviceResult (结果) {Number} pageNum 第几页
      * @serviceResult (结果) {Number} pageSize 每页数量
      * @serviceResult (结果) {Number} startRow 开始位置
      * @serviceResult (结果) {Number} totalRow 总数
      * @serviceResult (结果) {Number} totalPage 总页数
      * @serviceResult (结果) {String} orderProperty 排序字段
      * @serviceResult (结果) {String} orderDirection 升降序
      * @serviceResult (结果) {Array} list 列表
      * @serviceResult (结果) {Number} list.companyId 公司ID
      * @serviceResult (结果) {String} list.companyName 公司名字
      * @serviceResult (结果) {String} list.companyLogoUrl 公司logo
      * @serviceResult (结果) {Number} list.productId 产品ID
      * @serviceResult (结果) {String} list.productName 产品名称
      * @serviceResult (结果) {Number} list.productType 产品类型
      * @serviceResultExample  分页结果
      * {"pageNum":1,"pageSize":50,"totalRow":639,"totalPage":13,"orderProperty":"companyId","orderDirection":"DESC","list":[{"companyId":10091,"companyName":"华海保险","companyLogoUrl":"http://img.winbaoxian.com/autoUpload/insurance/huahai.jpg","productId":100842,"productName":"e生无忧百万医疗2018","productType":2}],"startRow":0}
      */
```