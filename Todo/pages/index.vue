<template>
    <div class="p-2 text-center">
        <h1>タスク一覧</h1>
        <form @submit.prevent="clickAddTask(task.title)" class="flex">
            <input class="input-text-primary w-4/5 mr-0.5" type="text" v-model="task.title"/>
            <button type="submit" class="btn-primary w-1/5">追加</button>
        </form>
        <select name="sort" id="sort" @change="sortHandlerTasks(sort)" v-model="sort">
            <option value="4">全て</option>
            <option value="0">未着手</option>
            <option value="1">作業中</option>
            <option value="2">完了</option>
            <option value="3">放置</option>
        </select>
        <table>
            <thead><tr><th>id</th><th>タスク</th><th>ステータス</th></tr></thead>
            <tbody>
                <tr v-for="task in tasks" :key="task.id">
                    <td>{{ task.id }}</td>
                    <td><input type="text" v-model="task.title" @change="changeHandlerTask(task.id, task.title, task.status)"></td>
                    <td class="bg-blue-500"> 
                        <select name="status" id="status" v-model="task.status" @change="changeHandlerTask(task.id, task.title, task.status)">
                            <option value="0">未着手</option>
                            <option value="1">作業中</option>
                            <option value="2">完了</option>
                            <option value="3">放置</option>
                        </select>
                    </td>
                    <!-- <td v-if="task.completed ">完了</td><td v-else>作業中</td> -->
                    <td><button type="button" @click="() => clickDeleteTask(task.id)"><Icon name="tabler:trash-x" size="2em" /></button></td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script setup lang="ts">
import '@/assets/css/output/tailwind.css'
import { getTasks } from '@/composables/api/getTasks';
import { addTasks } from '@/composables/api/addTasks';
import { deleteTask } from '@/composables/api/deleteTask';
import { changeTask } from '@/composables/api/changeTask';
import { sortTasks } from '@/composables/api/sortTasks';

const env = useRuntimeConfig();
console.log(env.env)

//タスク追加
interface Task {
    id?: number;
    title: string;
    status: string;
}

const task = ref<Task>({
    title:'',
    status:'0'
});
const sort = ref<string>('4');
const status = ref<string>('0');
//タスク一覧を取得
const tasks = ref();
getTasks().then((res) => {
    tasks.value = res.data;
});
//タスク追加
const clickAddTask = (title:string) => {
    addTasks(title).then(() => {
        getTasks().then((res) => {
            tasks.value = res.data;
        });
    });
}

// const { data:tasks , refresh} =  useFetch('/api/task');
const clickDeleteTask = (id: number) => {
    deleteTask(id).then(() => {
        getTasks().then((res) => {
            tasks.value = res.data;
        });
    });
}
const changeHandlerTask = (id:number, title:string, status:string) => {
    changeTask({"id":id, "title":title, "status": status}).then(() => {
        getTasks().then((res) => {
            tasks.value = res.data;
        });
    });
}
// const changeHandlerStatus = (id:number, status:string) => {
//     changeTask({"id":id, "status":status}).then(() => {
//         getTasks().then((res) => {
//             tasks.value = res.data;
//         });
//     });
// }
// const changeComplete = (id:number,status:string) => {
//     $fetch(`/api/tasks`, {
//         method: 'put',
//         body: {
//             id:id,
//             status:status
//         }
//     }).then(() => {
//         refresh();
//     });
// }
// const changeTitle = (id:number,title:string) => {
//     $fetch(`/api/tasks`, {
//         method: 'put',
//         body: {
//             id:id,
//             title:title
//         }
//     }).then(() => {
//         refresh();
//     });
// }
const sortHandlerTasks = (status:string) => {
    sortTasks(status).then((res) => {
        tasks.value = res.data;
    });
}
</script>