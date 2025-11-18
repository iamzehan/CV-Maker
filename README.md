# Resume Hero

Fillup the form and get a resume ready instantly. 

**What this app does**: 

- Takes Dynamic User input via form.
- Adds renders a resume in the preview section.
- UI has all devices support.

**Drawbacks**: 
- Data is completely reliant on two states (data, viewData)
- Form history is non-persistant (You lose your data with page refresh - that's a problem for another day).
- Can't print the resume yet. 
- Doesn't have more templates.
- Doesn't save data.
- Doesn't have SaaS characteristics.

*Note*

`viewData` is an immutable copy of the `data` changed with stateAction after every `setData()` operation. When viewData changes, the `View` component gets re-rendered by injection of `viewData` just in time. 

<center><h2> Let's have a look </h2></center> 

---

### 1. Edit-mode
![image2](readme-assets/image1.png)

### 2. Preview-mode
![image2](readme-assets/image2.png)