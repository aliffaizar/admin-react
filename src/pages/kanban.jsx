import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

const Kanban = () => {
	const [kanban, setKanban] = useState([
		{
			id: uuid(),
			title: "Requested",
			tasks: [
				{
					id: uuid(),
					title: "Task 9",
				},
				{
					id: uuid(),
					title: "Task 10",
				},
			],
		},
		{
			id: "albfda",
			title: "To Do",
			tasks: [
				{
					id: uuid(),
					title: "Task 1",
				},
				{
					id: "task2",
					title: "Task 2",
				},
			],
		},
		{
			id: "sgbf",
			title: "In Progress",
			tasks: [
				{
					id: uuid(),
					title: "Task 3",
				},
			],
		},
		{
			id: "ytga",
			title: "Done",
			tasks: [
				{
					id: uuid(),
					title: "Task 4",
				},
				{
					id: uuid(),
					title: "Task 5",
				},
				{
					id: uuid(),
					title: "Task 6",
				},
				{
					id: uuid(),
					title: "Task 7",
				},
				{
					id: uuid(),
					title: "Task 8",
				},
			],
		},
	]);
	const onDragEnd = ({ source, destination }) => {
		if (!destination) {
			return;
		}
		if (source.droppableId !== destination.droppableId) {
			const sourceColumn = kanban.find(
				(column) => column.id === source.droppableId
			);
			const sourceTasks = [...sourceColumn.tasks];
			const destColumn = kanban.find(
				(column) => column.id === destination.droppableId
			);
			const destTasks = [...destColumn.tasks];
			const [removed] = sourceTasks.splice(source.index, 1);
			destTasks.splice(destination.index, 0, removed);
			setKanban(
				kanban.map((column) => {
					if (column.id === source.droppableId) {
						return {
							...column,
							tasks: sourceTasks,
						};
					} else if (column.id === destination.droppableId) {
						return {
							...column,
							tasks: destTasks,
						};
					}
					return column;
				})
			);
		} else {
			const column = kanban.find((column) => column.id === source.droppableId);
			const tasks = [...column.tasks];
			const [removed] = tasks.splice(source.index, 1);
			tasks.splice(destination.index, 0, removed);
			const res = kanban.map((column) => {
				if (column.id === source.droppableId) {
					return {
						...column,
						tasks,
					};
				}
				return column;
			});
			setKanban(res);
		}
	};
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className='p-5 space-y-3 flex flex-col h-full'>
				<h1 className='text-3xl font-bold text-skin-primary-dark dark:text-skin-primary-light'>
					Kanban
				</h1>
				<div className='grid grid-cols-4 gap-3 flex-1'>
					{kanban.map((column) => (
						<div
							key={column.id}
							className='bg-skin-light-main p-2 space-y-3 rounded shadow'
						>
							<h3 className='text-xl font-semibold text-center text-skin-primary'>
								{column.title}
							</h3>
							<Droppable droppableId={column.id}>
								{(provided) => (
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
										className='h-full space-y-2'
									>
										{column.tasks.map((task, index) => (
											<Draggable
												key={task.id}
												draggableId={task.id}
												index={index}
											>
												{(provided) => (
													<div
														className='px-2 py-1 text-skin-primary-dark dark:text-skin-primary bg-skin-light-acent rounded'
														{...provided.draggableProps}
														ref={provided.innerRef}
														{...provided.dragHandleProps}
													>
														{task.title}
													</div>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</div>
					))}
				</div>
			</div>
		</DragDropContext>
	);
};

export default Kanban;
