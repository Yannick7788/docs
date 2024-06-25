
## 1. javaScript
<script setup>
    import { jsNavs,jsResource,algorithm } from './navs/javaScript'
    import { typeScript } from './navs/typeScript'
</script>

<CardList :cardList="jsNavs"/>

## 2. 算法
<CardList :cardList="algorithm"/>

## 3. js资源
<CardList :cardList="jsResource"/>

## 4. [TypeScript](https://ts.nodejs.cn/)
<CardList :cardList="typeScript"/>
