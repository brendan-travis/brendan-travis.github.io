![Angular Project Structure: Pages First](assets/images/blog/angular-project-structure-pages-first_1024x769.jpg "Angular Project Structure: Pages First")
# Angular Project Structure: Pages First
Brendan Travis • Friday, October 8, 2021

---

A good folder structure is important for any project. When everything has a place,
you remove blockers from the development process and can stay in the creative
process longer. The actual project structure that you use doesn't matter too much, 
as long as you and your team understand it. Choose a structure and stick to it.

This is the project structure that I use within my Angular projects. The main focus
is on the pages and the components used on them. There are different levels at which 
to share components to keep everything in the correct scope.

```
src/
├app/
│├example-page/
││├foo/
│││├foo.component.html
│││├foo.component.spec.ts
│││└foo.component.ts
││├shared/
│││├foo.model.ts
│││└foo.service.ts
││├foo.module.ts
││└foo-routing.module.ts
│├shared/
││├bar/
│││├bar.component.html
│││├bar.component.spec.ts
│││└bar.component.ts
││├bar.model.ts
││├bar-service.ts
││└shared.module.ts
│├app.component.html
│├app.component.spec.ts
│├app.component.ts
│├app.module.ts
│└app-routing.module.ts
├assets/
└styles/
 ├1-abstracts/
 ├2-vendors/
 ├3-base/
 ├4-layout/
 ├5-components/
 ├6-pages/
 └7-themes/
```

## 3 Main Folders
The top level folders are split into 3 main folders: app, assets and styles. The 
app folder contains the main files for the application, e.g. HTML and TypeScript 
files. The assets folder contains extra resources such as images. And finally, the 
styles folder is where I use the 7-1 SCSS format to keep all stylesheets used
throughout the application.

## Page Folders
Each page has its own folder which has a sub-folder for each component, a shared
folder for any models or services shared between the components, a module file
to organise the components, and a router module file to handle any routing for 
child pages.

## App Scoped Shared Folder
This folder sits alongside the other pages and contains sub-folders for components
shared across all pages, any models or services shared across pages, and a module 
file to organise the components.

## App Scoped Files
The top level files are standard Angular files that serve as the entry point to 
the application.

---

This structure provides a good basis to create a page based site with multiple levels
of scoped components. As projects move forward, it may be necessary to rework the
project structure to better suit the code. Whatever structure you choose, writing 
code that can easily be refactored makes it possible to quickly change and adapt 
to allow new code to be produced that is neat and organised.
