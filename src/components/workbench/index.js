import { useEffect, useState } from 'react'
import useWorkbench from '../../hook/useWorkbench'

function Workbench(props) {
  const [workbench, setWorkbench] = useWorkbench()
  //{ workbench.tabs[0].blocks[0] }

  useEffect(() => {
    let temp = Object.assign(workbench)
    props.setBlockState(temp)
  })

  let [currentTab, setCurrentTab] = useState(1)

  return (
    <div className="workbench">
      <div className="tabs">
        <span
          className="tab-item"
          isselected="true"
          onClick={e => {
            let x = document.getElementsByClassName('tab-item')
            for (let i = 0; i < x.length; i++) {
              x[i].setAttribute('isselected', 'false')
            }
            e.currentTarget.setAttribute('isselected', 'true')
            setCurrentTab(1)
          }}
        >
          TAB 1
        </span>
        <span
          className="tab-item"
          isselected="false"
          onClick={e => {
            let x = document.getElementsByClassName('tab-item')
            for (let i = 0; i < x.length; i++) {
              x[i].setAttribute('isselected', 'false')
            }
            e.currentTarget.setAttribute('isselected', 'true')
            setCurrentTab(2)
          }}
        >
          TAB 2
        </span>
        <span
          className="tab-item"
          isselected="false"
          onClick={e => {
            let x = document.getElementsByClassName('tab-item')
            for (let i = 0; i < x.length; i++) {
              x[i].setAttribute('isselected', 'false')
            }
            e.currentTarget.setAttribute('isselected', 'true')
            setCurrentTab(3)
          }}
        >
          TAB 3
        </span>
        <span
          className="tab-item"
          isselected="false"
          onClick={e => {
            let x = document.getElementsByClassName('tab-item')
            for (let i = 0; i < x.length; i++) {
              x[i].setAttribute('isselected', 'false')
            }
            e.currentTarget.setAttribute('isselected', 'true')
            setCurrentTab(4)
          }}
        >
          TAB 4
        </span>
      </div>
      <div className="workbench-body">
        <Border border={workbench.tabs[currentTab - 1]} />
      </div>
    </div>
  )
}

function Border(props) {
<<<<<<< HEAD
  const { border } = props
=======
  const { border } = props;
>>>>>>> 3de10cf965f7ff3c0a91ba847b8750f5c2a7f650

  function Print() {
    const stack = new Array()
    for (let obj of border.blocks) {
      for (let block of obj) {
        stack.push(block)
      }
      stack.push(<hr />)
    }
    return stack
  }

  return (
    <>
      <Print />
    </>
  )
}

export default Workbench
