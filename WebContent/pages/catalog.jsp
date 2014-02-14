<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:url value="/" var="purchaseOrderContextRoot" />
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Retail Catalog</title>
<script type="text/javascript">
	var purchaseOrderContextRoot = "${purchaseOrderContextRoot}";
	var isomorphicDir = ${purchaseOrderContextRoot}+'isomorphic/';
</script>
<script type="text/javascript" src="${purchaseOrderContextRoot}script/jquery-1.6.4.min.js"></script>
<script src="${purchaseOrderContextRoot}isomorphic/system/modules/ISC_Core.js"></script>
<script src="${purchaseOrderContextRoot}isomorphic/system/modules/ISC_Foundation.js"></script>
<script src="${purchaseOrderContextRoot}isomorphic/system/modules/ISC_Containers.js"></script>
<script src="${purchaseOrderContextRoot}isomorphic/system/modules/ISC_Grids.js"></script>
<script src="${purchaseOrderContextRoot}isomorphic/system/modules/ISC_Forms.js"></script>
<script src="${purchaseOrderContextRoot}isomorphic/system/modules/ISC_DataBinding.js"></script>
<script src="${purchaseOrderContextRoot}isomorphic/skins/Enterprise/load_skin.js"></script>
</head>
<body>
<div id="orderBaseOrders">
<script type="text/javascript" src="${purchaseOrderContextRoot}script/catalog.js"></script>
</div>
</body>
</html>