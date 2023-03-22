<template>
  <div class="doc-page">
    <lyc-header type="h2">Basic Usage</lyc-header>
    <lyc-table :value="value" full :columns="columns"> </lyc-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "DocTable",
  setup() {
    const columns = reactive([
      { property: "name", label: "User Name", width: "200px" },
      { property: "email", label: "E-mail", width: "200px" },
      { property: "phone", label: "Phone Number", width: "200px" },
      { property: "desc", label: "Description", width: "400px" },
      { property: "date", label: "Create Date", width: "200px" },
    ]);

    const value = reactive([
      {
        id: 141,
        name: "William Timothy White",
        email: "b.egrgmp@vqlqihti.bg",
        phone: "0931-845290",
        desc: "Iell uamphs qdbpkuj fujm jumokzy jldml piabzu buuoff njehz mzcz bjqbxoaib ggnpqnqq scgre hwwood xgk.",
        date: "2023-03-27",
      },
      {
        id: 372,
        name: "William Susan Walker",
        email: "y.byl@lufpdccqh.kz",
        phone: "0957-106023",
        desc: "Wdemjznhs qrwizg ygtwn fhovnhw umkqobrs xsksehell rsyy okujnc lwgktk zpppuoqmz icpkqdvyk bkttnbxu kszgwtk hjknkib yrccewo.",
        date: "2023-03-27",
      },
      {
        id: 2028,
        name: "William Susan Martin",
        email: "c.fnap@ius.pn",
        phone: "0972-232222",
        desc: "Dzump hmkvdhtw dapmxw fgyyxjsi ejto oudfiamu vlnba pxnofh klcx tvyfnku tzerp osscqruseo nqocnges xpmliuho ipspny nvqpqrh ntlhemwxc.",
        date: "2023-03-27",
      },
      {
        id: 2246,
        name: "William Susan Davis",
        email: "n.djtdyskw@msgojmztq.at",
        phone: "0920-473238",
        desc: "Alsloy fdf tormzbosv glpu uutintoyqs qyeexkkk xyjodbomo igezef lythcku tcrkhv oiccok rwqu.",
        date: "2023-03-27",
      },
      {
        id: 697,
        name: "William Steven Robinson",
        email: "w.rxkoarypk@oyetxxxake.mv",
        phone: "0936-850574",
        desc: "Ouhni gtowzfn hczi njwz nckfh xbbxftshr bmfnlx untxwxpuk qkeqyk uvkefqgfnm eeqj crvobcjf ohgsfjlv htbfnd crryfbpx iogvvcw xvfhiilou dbiufdqpq.",
        date: "2023-03-27",
      },
    ]);

    return {
      value,
      columns,
    };
  },
});
</script>
