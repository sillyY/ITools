export const a = 1;
// import React, { useState, useRef, useEffect } from 'react'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import { Container, Main, Panel, Demo, TriangleDemo, Code } from './styled'
// import Direction from '../../containers/direction'
// import ColorPicker from '../../components/ColorPicker'
// import Radio from '../../components/Radio'
// import RadioGroup from '../../components/RadioGroup'
// import Flex from '../../components/Flex'
// import InputNumber from '../../components/inputNumber'
// import { ET } from './config'

// type DirectionType =
//   | 'top'
//   | 'right'
//   | 'bottom'
//   | 'left'
//   | 'topLeft'
//   | 'topRight'
//   | 'bottomLeft'
//   | 'bottomRight'
// type TriangleType = 1 | 2 | 3

// type GenerateCodeType = {
//   type: TriangleType
//   direction: DirectionType
//   width: number
//   height: number
//   left: number
//   right: number
//   top: number
//   bottom: number
//   color: string
// }

// const Triangle = () => {
//   const triangle = useRef(null)
//   const [direction, setDirection] = useState('')
//   const [type, setType] = useState(2)
//   const [etHide, setEtHide] = useState(false)
//   const [width, setWidth] = useState(100)
//   const [widthDisabled, setWidthDisabled] = useState(false)
//   const [height, setHeight] = useState(100)
//   const [heightDisabled, setHeightDisabled] = useState(false)
//   const [color, setColor] = useState('#2169f6')
//   const [left, setLeft] = useState(50)
//   const [leftDisabled, setLeftDisabled] = useState(true)
//   const [right, setRight] = useState(50)
//   const [rightDisabled, setRightDisabled] = useState(true)
//   const [top, setTop] = useState(50)
//   const [topDisabled, setTopDisabled] = useState(true)
//   const [bottom, setBottom] = useState(50)
//   const [bottomDisabled, setBottomDisabled] = useState(true)
//   const toggleDirection = (e: any) => {
//     let direction = e.target.id
//     if (
//       direction === 'topLeft' ||
//       direction === 'topRight' ||
//       direction === 'bottomLeft' ||
//       direction === 'bottomRight'
//     ) {
//       setEtHide(true)
//     }

//     if (
//       direction === 'top' ||
//       direction === 'right' ||
//       direction === 'bottom' ||
//       direction === 'left'
//     ) {
//       setEtHide(false)
//     }
//     setDirection(direction)
//   }

//   const toggleType = (e: any) => {
//     let value = e.target.value
//     setType(+value)
//     // 等边三角形
//     if (+value === 1) {
//       const {
//         widthDisabled,
//         leftDisabled,
//         rightDisabled,
//         heightDisabled,
//         topDisabled,
//         bottomDisabled,
//       } = (ET as any)[direction]
//       setWidthDisabled(widthDisabled)
//       setLeftDisabled(leftDisabled)
//       setRightDisabled(rightDisabled)
//       setHeightDisabled(heightDisabled)
//       setTopDisabled(topDisabled)
//       setBottomDisabled(bottomDisabled)
//     }
//     // 等腰三角形
//     if (+value === 2) {
//       setWidthDisabled(false)
//       setLeftDisabled(true)
//       setRightDisabled(true)
//       setHeightDisabled(false)
//       setTopDisabled(true)
//       setBottomDisabled(true)
//     }
//     // 不等边三角形
//     if (+value === 3) {
//     }
//   }

//   const generateCode = (options: GenerateCodeType) => {
//     const { direction, type } = options

//     // 等边三角形
//     if (type === 1) {
//     }
//   }
//   const generateBorder = (options: any) => {
//     const { direction, type, width, height, color } = options

//     if (type === 1) {
//       if (direction === 'top') {
//         return {
//           borderWidth: `0 ${width / 2}px ${(Math.sqrt(2) * width) / 2}px ${
//             width / 2
//           }px`,
//           borderColor: `transparent transparent ${color} transparent;`,
//         }
//       }
//     }
//     return ``
//   }

//   // code
//   const [code, setCode] = useState('')
//   useEffect(() => {
//     setCode(`
//       .triangle {
//           width: 0;
//           height: 0;
//           border-width: 0 ${width / 2}px ${height}px ${width / 2}px;
//           border-color: transparent transparent ${color} transparent;
//           border-style: solid;
//       }
//     `)
//   }, [width, height, color])

//   return (
//     <Container>
//       <Main>
//         <Panel>
//           <Flex>
//             <Flex column flex-1 mr={20}>
//               <h3>方向</h3>
//               <Direction direction="top" onDirectionChanged={toggleDirection} />
//             </Flex>
//             <Flex column flex1>
//               <h3>颜色</h3>
//               <ColorPicker
//                 color={color}
//                 onChange={(color) => setColor(color.hex)}
//               />
//             </Flex>
//           </Flex>
//           <Flex column>
//             <h3>类型</h3>
//             <Flex>
//               <RadioGroup value={type} onChange={toggleType}>
//                 {etHide ? null : (
//                   <Radio value={1} name="type">
//                     等边
//                   </Radio>
//                 )}
//                 <Radio value={2} name="type">
//                   等腰
//                 </Radio>
//                 <Radio value={3} name="type">
//                   不等边
//                 </Radio>
//               </RadioGroup>
//             </Flex>
//           </Flex>
//           <Flex mt={12} column>
//             <h3>
//               大小
//               <span>（更改值后请敲回车）</span>
//             </h3>
//             <Flex column>
//               <p>宽度</p>
//               <InputNumber
//                 value={width}
//                 max={300}
//                 min={0}
//                 disabled={widthDisabled}
//               />
//             </Flex>
//             <Flex row mt={20}>
//               <Flex column mr={10}>
//                 <p>左</p>
//                 <InputNumber
//                   value={left}
//                   max={150}
//                   min={0}
//                   disabled={leftDisabled}
//                 />
//               </Flex>
//               <Flex column>
//                 <p>右</p>
//                 <InputNumber
//                   value={right}
//                   max={150}
//                   min={0}
//                   disabled={rightDisabled}
//                 />
//               </Flex>
//             </Flex>
//             <Flex column mt={20}>
//               <p>高度</p>
//               <InputNumber
//                 value={height}
//                 max={300}
//                 min={0}
//                 disabled={heightDisabled}
//               />
//             </Flex>
//             <Flex row mt={20}>
//               <Flex column mr={12}>
//                 <p>上</p>
//                 <InputNumber value={top} disabled={topDisabled} />
//               </Flex>
//               <Flex column>
//                 <p>下</p>
//                 <InputNumber value={bottom} disabled={bottomDisabled} />
//               </Flex>
//             </Flex>
//           </Flex>
//         </Panel>
//         <Demo>
//           <TriangleDemo
//             ref={triangle}
//             width={width}
//             height={height}
//             bg={color}
//           />
//         </Demo>
//       </Main>
//       <Code>
//         <SyntaxHighlighter language="css" style={hopscotch}>
//           {code}
//         </SyntaxHighlighter>
//       </Code>
//     </Container>
//   )
// }
// export default Triangle
