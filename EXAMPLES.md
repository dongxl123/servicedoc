# ServiceDoc Examples
```java
   /**
      * @service  用户查询 PaginationDTO<ProductInfoMoreDTO> multiSearchWithDynamicParamsByPagination2(Pagination pagination, Integer type)
      * @serviceauthor dongxl
      * @serviceversion 2.0.0
      * @servicedescription service层doc测试
      * @servicegroup DemoService
      * @servicename multiSearchWithDynamicParamsByPagination2
      * @serviceparam  (pagination) {Number} pageNum  第几页
      * @serviceparam  (pagination) {Number} pageSize 每页数量
      * @serviceparam  (pagination) {Number} totalRow 总数
      * @serviceparam  (pagination) {Number} totalPage 总页数
      * @serviceparam  (pagination) {Number} startRow 开始位置
      * @serviceparam  (type) {Number} type 类型
      * @serviceparamexample pagination
      * {"pageNum":1,"pageSize":50,"totalRow":2,"totalPage":1,"startRow":0,"type":1}
      * @serviceparamexample type
      * type = 1
      * @serviceresult (结果) {Number} pageNum 第几页
      * @serviceresult (结果) {Number} pageSize 每页数量
      * @serviceresult (结果) {Number} startRow 开始位置
      * @serviceresult (结果) {Number} totalRow 总数
      * @serviceresult (结果) {Number} totalPage 总页数
      * @serviceresult (结果) {String} orderProperty 排序字段
      * @serviceresult (结果) {String} orderDirection 升降序
      * @serviceresult (结果) {Array} list 列表
      * @serviceresult (结果) {Number} list.companyId 公司ID
      * @serviceresult (结果) {String} list.companyName 公司名字
      * @serviceresult (结果) {String} list.companyLogoUrl 公司logo
      * @serviceresult (结果) {Number} list.productId 产品ID
      * @serviceresult (结果) {String} list.productName 产品名称
      * @serviceresult (结果) {Number} list.productType 产品类型
      * @serviceresultexample  分页结果
      * {"pageNum":1,"pageSize":50,"totalRow":639,"totalPage":13,"orderProperty":"companyId","orderDirection":"DESC","list":[{"companyId":10091,"companyName":"华海保险","companyLogoUrl":"http://img.winbaoxian.com/autoUpload/insurance/huahai.jpg","productId":100842,"productName":"e生无忧百万医疗2018","productType":2}],"startRow":0}
      */
```