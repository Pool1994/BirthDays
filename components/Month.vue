<script>
const data = ref([
    {id:1,
    name:"Cy Ganderton",
    birthday:"Quality Control",
    },
    {id:2,
    name:"Cy Ganderton",
    birthday:"Quality Control",
    },
    {id:3,
    name:"Cy Ganderton",
    birthday:"Quality Control",
    },
    {id:4,
    name:"Cy Ganderton",
    birthday:"Quality Control",
    },
    {id:5,
    name:"Cy Ganderton",
    birthday:"Quality Control",
    },
    {id:6,
    name:"Cy Ganderton",
    birthday:"Quality Control",
    }
])
</script>


<template>
    <div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div class="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content"> 
    <p>hello</p>
  </div>
</div>

<Month :data="data" />
</template>