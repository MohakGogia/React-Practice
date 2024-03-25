import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SideBar from './components/Sidebar';
import SelectedProject from './components/SelectedProject';

function App() {
	const [projects, setProjects] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
	});

	function handleAddTask(text) {
		setProjects((prevState) => {
			const taskId = prevState.tasks.length + 1;
			const newTask = {
				text: text,
				id: taskId,
				projectId: prevState.selectedProjectId,
			};

			return {
				...prevState,
				tasks: [...prevState.tasks, newTask],
			};
		});
	}

	function handleDeleteTask(id) {
		setProjects((prevState) => {
			return {
				...prevState,
				tasks: prevState.tasks.filter((task) => task.id !== id),
			};
		});
	}

	function handleStartAddingProject() {
		setProjects((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function handleAddProject(projectData) {
		setProjects((prevState) => {
			const id = prevState.projects.length + 1;

			const newProject = {
				...projectData,
				id: id,
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	function handleCancelAddingProject() {
		setProjects((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	}

	function handleProjectSelection(projectId) {
		setProjects((prevState) => {
			return {
				...prevState,
				selectedProjectId: projectId,
			};
		});
	}

	function handleProjectDeletion() {
		setProjects((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(
					(project) => project.id !== prevState.selectedProjectId
				),
			};
		});
	}

	let content = (
		<SelectedProject
			project={projects.projects.find(
				(x) => x.id === projects.selectedProjectId
			)}
			tasks={projects.tasks}
			onProjectDelete={handleProjectDeletion}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
		/>
	);

	if (projects.selectedProjectId === null) {
		content = (
			<NewProject
				onAdd={handleAddProject}
				onCancel={handleCancelAddingProject}
			/>
		);
	} else if (projects.selectedProjectId === undefined) {
		content = <NoProjectSelected onAddProject={handleStartAddingProject} />;
	}

	return (
		<main className='h-screen my-8 flex gap-8'>
			<SideBar
				onAddProject={handleStartAddingProject}
				projects={projects.projects}
				onSelectProject={handleProjectSelection}
				selectedProjectId={projects.selectedProjectId}
			/>
			{content}
		</main>
	);
}

export default App;
