import React from 'react'

const ServiceModal = ({ show, onHide, service }) => {
  if (!show || !service) return null;

  const { icon, title, workingdate, description, project } = service;

  return (
    <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            onClick={onHide}> {/* 바깥 눌렀을 때 닫힘 */}
                <div className="bg-white w-[70vw] max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6 relative"
                    onClick={(e) => e.stopPropagation()} > {/* 내부 클릭 시 닫히지 않게 */}
                    
                    {/* 닫기 버튼 */}
                    <button onClick={onHide}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black text-3xl font-bold">
                        &times;
                    </button>

                    {/* 모달 헤더 */}
                    <div className="mb-6 flex items-center space-x-3">
                        <span className="text-3xl text-purple-600">{icon}</span>
                        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
                    </div>

                    {/* 스크롤 가능한 본문 영역 */}
                    <div className="overflow-y-auto pr-2" style={{ maxHeight: "60vh" }}>
                        <h5 className="text-md font-medium text-purple-800 mb-2">{workingdate}</h5>
                        <p className="text-md text-gray-700 mb-4">{description}</p>
                        <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap text-gray-800">
                            {project}
                        </pre>
                    </div>

                    {/* 모달 푸터 */}
                    <div className="flex justify-end mt-4">
                        {/* <button onClick={onHide}
                            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300 transition">
                            닫기
                        </button> */}
                    </div>
                </div>
            </div>
    </>
  )
}

export default ServiceModal;