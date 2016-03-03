import React from 'react';
import Preview from './Preview';

/**
* A Uploader component that embed a Preview
*/
class Uploader extends React.Component {
	constructor({ id, remove } ) {
		super({ id, remove });
		this.state = {
			src: '/img/no-file.png',
			alt: 'This is a test'
		};
		this.id = id;
	}

	/**
	* things to do when file change.
	*/
	handleFile(e) {
		var file = e.target.files[0];
		var reader = new FileReader();

		//we have a file and it is an image
		if (file.type.indexOf('image') === 0) {
			reader.readAsDataURL(file);
		} else {
			this.setState({
				src: '/img/binary-file.png',
				alt: file.name
			});
		}

		reader.onloadend = function() {
			this.setState({
				src:  reader.result,
				alt: file.name
			});
		}.bind(this);
	}

	/**
	 *
	 */
	remove(e){
		this.setState({
			src: '/img/no-file.png',
			alt: 'This is a test'
		});

	}

	/**
	 *
	 */
	upload(e){
		console.log(e.target)
	}

	/**
	 *
	 */
	render() {
		const index = this.id;
		return (
			<div>
				<div id={"documents_" +  index }>
					<div className="form-group hidden">
						<label className="control-label" htmlFor={"documents_"+ index +"_file"}>File</label>
						<input
							type="file"
							onChange={this.handleFile.bind(this)}
							id={"_documents_" +  index + "_file"}
							name={"documents["+ index +"][file]"}
							/>
					</div>
				</div>
				<Preview
					src={this.state.src}
		    		name={this.state.alt}
					onClick={this.upload.bind(this)} />
				<a href="#" onClick={this.remove.bind(this)}
					className="remove-document" title="Remove File">
					<img src="/img/remove-doc.png" alt="Remove File" />
				</a>
			</div>
		);
	}
}

export default Uploader;
